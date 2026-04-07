# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website for Quentin BENDER (DevSecOps Engineer) built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The site is deployed to GitHub Pages with static export.

**Key dependencies:**
- Material-UI (MUI) - UI components and icons
- React Icons - Icon library
- Framer Motion - Animations and page transitions
- Emotion - CSS-in-JS (MUI peer dependency)

## Development Commands
```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (static export for GitHub Pages)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Key Architecture Patterns

### Static Export Configuration
- **Output mode**: Static export (`output: 'export'` in next.config.ts)
- **Base path**: Uses `/porfolio` in production for GitHub Pages
- **Images**: Unoptimized for static export compatibility
- **Console removal**: Automatic in production builds
- **Package optimization**: `framer-motion` and `react-icons` imports are optimized via `experimental.optimizePackageImports`

### Multilingual System
All text content is managed through a custom i18n system:
- **Context**: `contexts/LanguageContext.tsx` - centralized translations dictionary
- **Languages**: French (fr) and English (en)
- **Storage**: User preference saved in localStorage
- **Auto-detection**: Browser language detection on first visit via `LanguageDetector` component
- **Usage**: Access via `const { t } = useLanguage()` hook, then `t('key.path')`
- **Adding translations**: Update the `translations` object in LanguageContext.tsx with both fr/en keys
- **Note**: All components using translations must be client components (`'use client'` directive)

### Component Organization
- **Component structure**: Each component in its own directory: `ComponentName/ComponentName.tsx` + `ComponentName.module.css`
- **Location**: All components in `app/components/`
- **CSS Modules**: Used for component-scoped styling (e.g., `Navbar/Navbar.module.css`)
- **Global styles**: `app/globals.css` contains Tailwind imports and CSS variables
- **Styling approach**: Hybrid of Tailwind utility classes and CSS Modules
- **MUI components**: Used for icons (`@mui/icons-material`) and some UI elements

### Layout & Navigation
- **Root layout**: `app/layout.tsx` wraps all pages with LanguageProvider, Navbar, and Footer
- **Animations**: Framer Motion used for page transitions (PageTransition component)
- **Navigation**: Bottom fixed navbar (Navbar component) for mobile-first design
- **Language toggle**: Floating button (FloatingLanguageToggle) for language switching

### Page Structure
- **Home**: `app/page.tsx` - landing page with intro and profile image
- **Career**: `app/career/page.tsx` - timeline of professional experience
- **Projects**: `app/projects/page.tsx` - showcase of projects
- **Contact**: `app/contact/page.tsx` - contact form and information
- **AI Tools**: `app/ai-tools/page.tsx` - AI usage information

### SEO Configuration
Comprehensive SEO setup in `app/layout.tsx`:
- Open Graph tags for social sharing
- Twitter card metadata
- JSON-LD structured data (Person schema)
- Keywords optimized for DevSecOps/cybersecurity

## Important Implementation Details

### Path Aliases
- `@/*` maps to project root for cleaner imports

### Image Handling
- External images allowed (GitHub avatars)
- Background image: `public/background.avif`
- Project SVGs stored in `public/` directory
- Images are unoptimized for static export compatibility

### Client vs Server Components
- Most pages use `'use client'` directive for interactivity
- LanguageContext and all pages consuming it must be client components
- Layout.tsx uses suppressHydrationWarning for dark mode compatibility

### Styling Variables
CSS variables defined in globals.css:
- `--background`: white/dark based on color scheme
- `--foreground`: text color
- Dark mode support via `@media (prefers-color-scheme: dark)`

## Adding New Translations
When adding new text to the UI:
1. Add translation keys to `translations.fr` and `translations.en` in `contexts/LanguageContext.tsx`
2. Use the `t()` function in components: `t('section.key')`
3. Follow existing naming convention: `'page.section.element'`

## GitHub Pages Deployment
- **Automatic deployment**: GitHub Actions workflow (`.github/workflows/nextjs.yml`) triggers on push to `master` branch
- **Build output**: Static export generates files in `out/` directory
- **Base path**: `/porfolio` is applied in production
- **Asset prefix**: Ensures correct resource loading on GitHub Pages
- **Requirements**: Images must be unoptimized for static hosting compatibility

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **porfolio** (98 symbols, 150 relationships, 0 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/porfolio/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool | When to use | Command |
|------|-------------|---------|
| `query` | Find code by concept | `gitnexus_query({query: "auth validation"})` |
| `context` | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})` |
| `impact` | Blast radius before editing | `gitnexus_impact({target: "X", direction: "upstream"})` |
| `detect_changes` | Pre-commit scope check | `gitnexus_detect_changes({scope: "staged"})` |
| `rename` | Safe multi-file rename | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher` | Custom graph queries | `gitnexus_cypher({query: "MATCH ..."})` |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers/importers | MUST update these |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/porfolio/context` | Codebase overview, check index freshness |
| `gitnexus://repo/porfolio/clusters` | All functional areas |
| `gitnexus://repo/porfolio/processes` | All execution flows |
| `gitnexus://repo/porfolio/process/{name}` | Step-by-step execution trace |

## Self-Check Before Finishing

Before completing any code modification task, verify:
1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## Keeping the Index Fresh

After committing code changes, the GitNexus index becomes stale. Re-run analyze to update it:

```bash
npx gitnexus analyze
```

If the index previously included embeddings, preserve them by adding `--embeddings`:

```bash
npx gitnexus analyze --embeddings
```

To check whether embeddings exist, inspect `.gitnexus/meta.json` — the `stats.embeddings` field shows the count (0 means no embeddings). **Running analyze without `--embeddings` will delete any previously generated embeddings.**

> Claude Code users: A PostToolUse hook handles this automatically after `git commit` and `git merge`.

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
