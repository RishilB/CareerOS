# CareerOS

CareerOS is a static Next.js site that helps students launch the live CareerOS Custom GPT in ChatGPT, with prompt-based setup available for Claude or Gemini.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Radix Accordion

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The site is configured for static export. Output is generated in `out/`.

## GitHub Pages

If deploying to a project site such as `https://<user>.github.io/CareerOS/`, set the base path before building:

```bash
$env:NEXT_PUBLIC_BASE_PATH="/CareerOS"
npm run build
```

For a root GitHub Pages site, build without that environment variable.

## Structure

- `src/app` route files
- `src/components` reusable UI and site sections
- `src/data` typed content data
- `brain` Custom GPT instructions, knowledge files, and rubrics
- `src/lib` shared utilities
- `docs` project brief

## Notes

- The ChatGPT activation path points to the live CareerOS GPT.
- Claude and Gemini use the shorter manual setup prompt from `src/data/site.ts`.
