# Gorod — Historical Splash / Motion Design Archive

Historical motion-design repository preserving a **Gorod** splash / loader animation experiment and its exported web / Lottie artifacts.

This repository is not a complete application source tree. The visible checkout contains an Adobe After Effects project, generated animation JSON, a self-contained Bodymovin / Lottie HTML demo, and related exported assets.

## Repository contents

```text
gorod splash.aep     Adobe After Effects source
splash gorod.json    exported animation data
demo.html            self-contained Bodymovin / Lottie preview
splash 2/            supporting animation assets / exports
2/                   supporting historical assets
data.json            generated / supporting animation data
```

There is no root package manager, application backend, database, Android / iOS project, or maintainable web-application source in the current repository.

## Motion workflow

The repository represents a typical historical motion handoff:

```text
After Effects project
       |
       v
Bodymovin / Lottie export
       |
       +-- JSON animation data
       `-- generated HTML preview
```

The large `demo.html` embeds the Lottie runtime plus serialized animation data directly in one file. It should be treated as a **generated preview artifact**, not as hand-authored application code.

## After Effects source

`gorod splash.aep` is the strongest editable source artifact in the repository.

Because `.aep` is a binary authoring format, Git cannot provide useful line-by-line diffs for changes inside the project.

For a modern portfolio archive, useful companion artifacts would be:

- rendered MP4 / WebM preview;
- animated WebP / GIF;
- still keyframes;
- a short explanation of where the splash appears in the product flow;
- the original design / brand context if it can be published.

## Lottie / Bodymovin export

`splash gorod.json` and `demo.html` preserve the browser-oriented animation export.

A maintainable modern integration would normally keep the animation JSON separately and load it through a current Lottie runtime instead of committing a large generated HTML file that bundles the runtime and payload together.

Conceptually:

```text
animation.json
     +
Lottie runtime dependency
     +
small application wrapper
```

## Running the demo

The exported HTML is static. Serve the repository with any local HTTP server, for example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/demo.html
```

Opening large generated animation files directly from `file://` can behave differently across browsers, so a local HTTP server is preferable.

## Product / authorship boundary

The repository name alone does not establish the full underlying Gorod product, its engineering architecture, or production application behavior.

What this checkout proves is narrower and still useful:

- motion / splash design;
- After Effects authoring;
- Bodymovin / Lottie export workflow;
- web animation handoff;
- historical product-presentation assets.

For portfolio use, present it as **design / motion work** unless the actual application source and role context are documented elsewhere.

## Generated-file caveat

Files such as `demo.html` and large exported JSON should not be reviewed as if every embedded runtime line was authored specifically for this project.

They include generated / third-party animation-runtime code and serialized design data.

## Current status

**Historical motion-design / splash-animation archive.** The editable After Effects source and exported Lottie / Bodymovin artifacts are preserved; the full application source is not present in this repository.

## License

No repository-wide software or media license is assumed by this README. Verify ownership / client-use constraints for the design, fonts, images, Lottie runtime, and After Effects source before redistribution.