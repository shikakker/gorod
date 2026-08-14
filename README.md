# Gorod — motion design archive

Historical motion-design repository preserving the **Gorod** splash animation, its Adobe After Effects source and browser-oriented Lottie/Bodymovin exports.

The repository is intentionally presented as a **motion-design case**, not as source code for a complete Gorod application.

## Interactive viewer

A small modern viewer is available at `index.html`. It loads the original checked-in Lottie exports and adds:

- play / pause;
- restart;
- selection between `splash gorod.json` and `data.json`;
- 0.5×–2× playback speed;
- responsive presentation;
- keyboard-accessible native controls;
- reduced-motion-aware autoplay behavior;
- explicit loading/error status.

No original motion source was replaced to build the viewer.

## Preserved source artifacts

```text
gorod splash.aep     Adobe After Effects source
splash gorod.json    Lottie / Bodymovin export
data.json            second animation export
demo.html            historical generated preview
splash 2/            historical supporting exports
2/                   historical supporting assets
```

The large historical `demo.html` is retained for provenance. It contains generated/runtime material and should not be treated as maintainable hand-authored application code.

## Modern portfolio layer

```text
index.html            interactive case viewer
assets/styles.css     responsive presentation
assets/viewer.js      Lottie controls and states
scripts/validate.mjs  source-integrity checks
.github/workflows/    CI validation
```

The viewer uses `lottie-web` from a pinned CDN version and keeps animation payloads as local JSON files.

## Run locally

Serve the repository over HTTP so JSON loading works consistently:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

The original generated preview remains available at `/demo.html`.

## Validation

Node 20+ is sufficient; there are no npm dependencies to install.

```bash
npm test
```

The check verifies that the original After Effects file, both JSON exports and the portfolio viewer exist. It parses both Lottie files and checks core animation metadata and layer data.

GitHub Actions runs the same validation on pushes and pull requests.

## Motion workflow represented here

```text
After Effects source
       ↓
Bodymovin / Lottie export
       ↓
JSON animation data
       ↓
Browser preview / product handoff
```

## Scope and authorship boundary

What this checkout directly demonstrates is motion/splash design, After Effects authoring artifacts, Lottie export workflow and web-animation handoff. The repository does **not** contain a backend, database, native application project or sufficient source to claim implementation of the full Gorod product.

No product metrics, production scale or engineering features are inferred from the repository.

## Current status

**Portfolio-ready historical motion archive with an interactive web viewer.** Original `.aep`, Lottie exports and generated demo are preserved alongside a small maintainable presentation layer.

## License

No repository-wide software or media license is assumed. Verify ownership and redistribution rights for design assets, fonts, generated runtime material and After Effects source before reuse.
