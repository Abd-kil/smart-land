# Assignment brief: extracted from BMM601.pdf

**University:** Syrian Virtual University (SVU), Ministry of Higher Education
**Course:** Multimedia Systems (ITE_BMM601 + ISE_MM), semester assignment F25
**Instructor:** Eng. Talal Mohammad Walid Antakya Lee (م. طلال محمد وليد انطاكيه لي)

## Goal of the assignment
Go deeper into one core topic of the course and get hands-on with real-world multimedia applications.

## Company context (Smart Land)
- Global consulting and technology-solutions company, **founded 2011**.
- Builds advanced, customised software and **integrates AI into its own operations**.
- Serves many sectors. Portfolio:
  - **Smart Signal**: sign-language translation app
  - **MyKey**: platform for advertising real estate and vehicles for sale or rent
  - **Sada**: remote-learning (e-learning) platform
  - **Welcome**: multi-vendor e-commerce app
  - **Hospital management systems**, and others

## The task
Design and build a **static website, rich in multimedia**, that introduces visitors to Smart Land by showing:
1. The company's **message** (mission) and **directions** (vision/strategy)
2. The **services** it offers
3. A **project gallery**: short overview of key achievements and success stories
4. The company's **contact information**

Experience requirement: lots of images and intro videos about the company and its main work. It must feel rich and enjoyable to browse, **not long, dry text**.

## Required content and marking (total 100)
| # | Requirement | Marks |
|---|---|---|
| 1 | Distinctive **logo / visual identity**, made with a design tool | 10 |
| 2 | Attractive design with colours suited to the **target audience** | 10 |
| 3 | **Digital images**, enhanced and processed in an image-editing tool, expressing the site's content | 20 |
| 4 | **Videos made specifically for the site** in a digital video editor, with suitable **audio**, **synchronised text explanations (captions/subtitles)**, reflecting the site's idea and goal | 20 |
| 5 | **AI tools used to generate part of the site's content**, and this content **must be pointed out in the report** | 20 |
| 6 | Images and videos at a resolution giving a good visitor experience, with web-appropriate file sizes. **Non-animated images must be WEBP or AVIF only.** | 10 |
| 7 | **Report, max 10 pages**, explaining the site's source code. It must include a clear **link to the live site** hosted on a **free hosting service** | 10 |

## Submission rules
- **Deadline: 12 Nov 2026** (2026/11/12)
- Submit **only via the LMS**
- Team of **exactly 7 students** (no more, no fewer)
- One **zip file** containing:
  - a **text file** with the names and IDs of all 7 students
  - a **PDF** with the report

## Hints, ambiguities and risks
- "Static website" = no backend. A React app built to static files (Vite/CRA build) hosted on a free host is fine, but the contact form must work without a server (mailto link or a form service).
- Video format is not restricted; the WEBP/AVIF rule is stated for images. Posters, thumbnails, logos-as-raster and gallery photos should all be AVIF/WebP. SVG for the logo is vector, so keep it as SVG and also export a WebP version to be safe; confirm with the instructor if unsure.
- Videos need: custom editing, audio (voice-over/music), and synchronised text. Use a WebVTT captions track plus, ideally, burned-in key titles.
- AI-generated assets (images, voice-over, script, music, logo ideation) must be listed in the report, so keep a log: tool, prompt, output file, where it is used.
- The report explains the **code**, so keep the code structure clean and explainable (components, tokens, folders).
- Hosting options: GitHub Pages, Netlify, Cloudflare Pages, Vercel (all free tiers). Check per-file size limits for video.
- Remaining time from today (2 Nov 2026): 10 days.
