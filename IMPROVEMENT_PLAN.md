# Completion plan

1. Classify `gorod` accurately as an animation/motion-design artifact rather than a conventional application: the repository consists primarily of large exported `demo.html`/JSON animation files plus an After Effects `.aep` source.
2. Establish provenance for the animation exports: identify the export tool/library and relationship between root, `2/` and `splash 2/` variants. Document which version is canonical instead of presenting duplicates as separate products.
3. Preserve the `.aep` source as the editable master where licensing allows, but document the After Effects version/plugins/fonts required to open it. Do not imply the repository can regenerate the animation if the original export pipeline is unknown.
4. Create a lightweight static showcase entry point that embeds or links the canonical animation without rewriting the historical visual work. Keep original exports intact for provenance.
5. Audit `data*.json` duplication and remove only byte-identical redundant showcase copies on a later cleanup branch; retain source/history references so archival material is not accidentally lost.
6. Verify all external assets/scripts referenced by exported HTML. Vendor remote dependencies locally only when licensing permits, or document that the historical export requires them.
7. Add accessibility/fallback behavior around the animation: title/description, reduced-motion alternative, static poster/fallback and a way to pause motion where technically feasible.
8. Optimize delivery of the showcase without altering the master artifact: compression, caching and lazy loading for large HTML/JSON; avoid loading multiple variants simultaneously.
9. Add simple validation that the canonical HTML/JSON assets exist and render without missing local references. This archival project does not need a modern framework or fabricated unit-test suite.
10. Rewrite README as verified motion-design case-study documentation: what survives in the repo, source/export formats, how to preview it, provenance, technical limitations and the distinction between design/animation work and software engineering.
