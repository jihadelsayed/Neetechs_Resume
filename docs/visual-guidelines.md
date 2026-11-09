# Neetechs Resume visual design

This repository is a public résumé and portfolio site, not a résumé editor.
It consumes remote resume/profile JSON and renders About, Experience,
Portfolio, Publications and Contact. Visual changes must not alter the
`ResumeService`, data format, downloads, or email composition behavior.

## Design system

The current `@neetechs/ui@0.0.4` package predates the new shared navy palette.
`src/styles.scss` supplies a temporary dark-theme compatibility bridge.

| Role | Token | Dark color |
| --- | --- | --- |
| Canvas | `--nt-bg-app` | `#202D42` |
| Footer / navigation | `--nt-bg-sidebar` | `#182337` |
| Cards | `--nt-bg-surface` | `#34445D` |
| Raised cards | `--nt-bg-surface-raised` | `#445772` |
| Primary actions | `--nt-accent` | `#528EF5` |
| Text | `--nt-text-primary` | `#F8FAFC` |

Use semantic CSS roles rather than raw color literals inside components.
Respect light/alternate-accent and high-contrast styles. Remove the bridge
only after updating to a verified published design-system release.

## UX rules

- Keep the hero compact, not a full-screen splash.
- Keep mobile and desktop section navigation consistent and keyboard-accessible.
- Use readable project cards, education/experience timelines and publications.
- Contact fields need clear labels, borders, validation errors and focus rings.
- Keep document data, external profile links and project images unchanged.

Validate with `npm run test:design` and `npm run build`. A static
contrast/token test is not a substitute for browser and mobile review.
