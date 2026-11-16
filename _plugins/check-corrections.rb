# Stop the build if a file in _corrections/ names a bib key that isn't in the
# publications .bib file, or lacks a corrected_version link. Without this, a typo in
# `bibkey` would just make the "Correction" button silently not appear.
module Jekyll
  class CheckCorrections < Generator
    priority :highest

    def generate(site)
      corrections = site.collections["corrections"]
      raise "check-corrections: no 'corrections' collection in _config.yml" if corrections.nil?

      bib_path = File.join(site.source, "_bibliography", site.config["scholar"]["bibliography"])
      bib_keys = File.read(bib_path).scan(/^@\w+\{\s*([^,\s]+)\s*,/).flatten

      corrections.docs.each do |doc|
        key = doc.data["bibkey"]
        raise "check-corrections: #{doc.relative_path} has no bibkey" if key.nil?
        raise "check-corrections: #{doc.relative_path} bibkey '#{key}' is not in #{bib_path}" unless bib_keys.include?(key)
        raise "check-corrections: #{doc.relative_path} has no corrected_version" if doc.data["corrected_version"].to_s.empty?
      end
    end
  end
end
