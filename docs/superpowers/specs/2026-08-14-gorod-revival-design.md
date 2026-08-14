# Gorod motion archive revival — design

## Purpose
Preserve the original After Effects and Lottie artifacts while making the repository immediately understandable and viewable as a historical motion-design case.

## Current source of truth
The repository contains an After Effects project (`gorod splash.aep`), two large Lottie/bodymovin JSON exports (`data.json`, `splash gorod.json`), an old generated `demo.html`, and additional export directories. It does not contain a modern application backend or product source code.

## Approach
Add a small static portfolio viewer without modifying the historical source artifacts. The viewer loads the existing Lottie JSON in-browser, provides explicit play/pause/restart and speed controls, supports reduced-motion preferences, and explains the archival context. A Node validation script checks that the JSON exports are parseable and contain expected Lottie metadata. GitHub Actions runs the checks.

## Boundaries
- Do not claim the repository is a complete application.
- Do not rewrite or delete the `.aep`, JSON exports, old demo, or export directories.
- Do not invent product metrics, clients, dates, or implementation ownership not present in the repository.
- External Lottie runtime is loaded from a pinned CDN URL; the original JSON stays local.

## Completion tasks
1. Preserve and document source artifacts.
2. Add a modern static viewer entry point.
3. Add responsive presentation styling.
4. Add accessible playback controls.
5. Add animation selector for both JSON exports.
6. Add speed control and restart behavior.
7. Respect `prefers-reduced-motion`.
8. Add JSON integrity/metadata validation.
9. Add CI for repository checks.
10. Rewrite README around verified historical scope and usage.
