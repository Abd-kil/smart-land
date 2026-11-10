# Smart Land: Brand and Design System (v1.0)

Handoff doc for the React developer. Code lives in `src/design-system/` (tokens.css, components.css, components.jsx). Brand assets live in `brand/`.

## 1. Brand idea
**Smart Land builds intelligent software on solid ground.** Their products serve real places and real people: hospitals, classrooms, listings, shops, conversations across sign language. The brand borrows from **land surveying and topographic maps**: contour lines, survey stakes, coordinates. The name literally says it: smart + land.

- **Tagline (EN):** Solid ground for smart software.
- **Tagline (AR):** أرضٌ صلبة لبرمجيات ذكية
- **Audience:** business owners, hospital and school administrators, property and retail operators, and technical decision makers evaluating a software partner. Region: Arabic and English speakers, so **RTL support is mandatory**.
- **Personality:** grounded, clear, quietly confident, a little curious. Not hype, not "futuristic neon".
- **Voice:** plain verbs, concrete numbers and names, sentence case, short sentences. Say "Sada helps schools teach remotely", not "leveraging synergistic e-learning paradigms". Buttons say what happens: "See our projects", "Contact us".

## 2. Logo
Files: `brand/logo-mark.svg`, `logo-horizontal.svg`, `logo-horizontal-light.svg`.
- **Mark:** three nested contour lines forming a hill, with a yellow survey stake at the summit. Contours = land. Stake = a point of decision, "we are here".
- **Wordmark:** "smart land", lowercase, Familjen Grotesk Bold. Outline the text to paths in Figma/Inkscape/Illustrator before final export (the SVGs use live text for editing).
- **Clear space:** height of the stake on every side. **Minimum size:** mark 24 px, horizontal lockup 120 px wide.
- **Don't:** recolor the stake, add shadows, stretch, put the dark logo on lagoon backgrounds (use the light version).

## 3. Colour
| Token | Hex | Use |
|---|---|---|
| `--sl-lagoon-900` | #0A3340 | Primary text, dark sections |
| `--sl-lagoon-700` | #0F4C5C | Headings on light, hover on dark |
| `--sl-field-600` | #1F7A63 | Links, text accents on light (5.2:1 on mist) |
| `--sl-field-400` | #3FB391 | Graphics, charts, accents on dark |
| `--sl-stake-400` | #FFC93C | **The one loud colour.** Primary buttons, stake marker, focus ring on dark. Always with lagoon text |
| `--sl-sky-300` | #8FD0EA | Secondary highlights, video overlays |
| `--sl-mist-100` | #E8F1F0 | Page background |
| `--sl-white` | #FFFFFF | Cards |
| `--sl-berry-600` | #B3265B | Errors only |

Rules: yellow appears **once or twice per screen**. Body text is lagoon-900 on mist/white (contrast above 12:1). Never put yellow text on light backgrounds.

## 4. Typography
- **Display and headings:** Familjen Grotesk, 600/700 (Google Fonts)
- **Body, UI, Arabic:** Readex Pro, 300-600 (Google Fonts). It has Arabic and Latin in one family, so mixed text sits evenly.
- Scale is fluid (`clamp`) on a 1.25 ratio, in `tokens.css` as `--sl-text-*`. Body 17 to 18 px, line-height 1.65. Line length max 68ch (`.sl-prose`).
- Headings: sentence case, tight tracking (-0.01em), **no all-caps labels, no single-word colour accents**. Arabic headings use `font-weight: 600` and line-height 1.4.

## 5. Layout and shape
- 12-column grid, container max 1200 px, gutters 24 px (16 px on mobile). 4 px spacing base (`--sl-space-1..12`).
- Breakpoints: 640 / 960 / 1280.
- **Signature shape: the cut corner.** Media frames and project cards have one clipped corner (top-end), like a folded map tab. Buttons are 10 px radius; inputs 8 px. No pill shapes, no uniform radii everywhere.
- **Contour dividers** between sections (`<ContourDivider />`) shift a section from mist to lagoon like rising terrain. Use it between 2-3 sections maximum, not all.
- **Project cards carry survey data:** sector, year, location type. This is real information, not decoration.
- Media-first: every section has an image or video; text blocks max 3 short paragraphs.
- Shadows are lagoon-tinted and low (`--sl-shadow-1/2`). One elevation level per component.

## 6. Motion
- One orchestrated moment: **hero contours draw in on load** (stroke-dashoffset, 1.2s). Everything else: no scroll-fade entrances.
- Interaction feedback only: button press, accordion open, video play state. 150-250 ms, `--sl-ease`.
- Respect `prefers-reduced-motion` (already in `components.css`).

## 7. Imagery and video
- **Photography/illustration style:** real-world scenes (clinics, classrooms, streets, shops) with a lagoon-to-field colour grade, soft contrast, plenty of negative space. Apply the same grade to all edited images so the gallery feels unified (document the editor preset in the report).
- **Formats:** images **AVIF (primary) + WebP (fallback)** only. Logo stays SVG. Widths 480 / 960 / 1600. Targets: hero 1600w AVIF under 200 KB, cards 960w under 90 KB, thumbs under 25 KB. Use `<MediaFrame>` which outputs `<picture>`.
- **Video:** MP4 (H.264 + AAC) primary, optional WebM (VP9). 1280x720, 30 fps, 30-60 s each, aim 6-15 MB (free hosts penalise big files). Poster image in AVIF/WebP. **Always ship a `.vtt` captions file**, including Arabic and English tracks if possible. Use `<VideoFrame>`.
- **AI-generated content:** label it in the UI with `<AIBadge />` (small "Made with AI" tag on the frame corner) and log every asset (tool, prompt, file, location) in `ai-content-log.md` for the report's AI section (20 marks).

## 8. Components (in `components.jsx`)
`Container`, `Section` (tone: mist | white | lagoon), `Heading`, `Button` (primary | secondary | ghost), `Card` (cut corner), `ProjectCard`, `MediaFrame`, `VideoFrame`, `AIBadge`, `ContourDivider`, `SiteHeader`. All use logical CSS properties so RTL works by setting `<html dir="rtl" lang="ar">`.

## 9. Suggested page map (one page, anchor nav)
1. Hero: contour animation + 20 s brand video + tagline
2. Message and directions: mission, vision, 3 principles (image-led)
3. Services: 4 cards with images
4. Projects gallery: Smart Signal, MyKey, Sada, Welcome, Hospital systems, as `ProjectCard`s + a video each if time allows
5. Achievements and success stories: milestones since 2011, short quotes
6. Contact: details, map image, mailto/form-service button
7. Footer: logo, links, AI-content note

## 10. Accessibility floor
Visible focus ring (yellow on dark, lagoon on light), alt text on every image, captions on every video, no autoplay with sound, minimum tap target 44 px, colour never the only signal.

## 11. Dev setup
```bash
npm create vite@latest smart-land -- --template react
# copy src/design-system/* into src/, then in main.jsx:
# import './design-system/tokens.css'; import './design-system/components.css'
```
Add fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@600;700&family=Readex+Pro:wght@300;400;500;600&display=swap" rel="stylesheet">
```
Deploy the `dist/` folder to GitHub Pages / Netlify / Cloudflare Pages (set Vite `base` for GitHub Pages).
