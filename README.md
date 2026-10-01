# LaunchCraft

A responsive, fictional course-launch website built with React, TypeScript, and Vite.

## Features

- Conversion-focused editorial landing page
- Interactive curriculum accordion
- Live enrollment countdown
- Multi-step registration flow with validation and success state
- Responsive navigation and reduced-motion support
- Original fictional instructor portrait

All course details, testimonials, and people are fictional portfolio content.

## Structure

- `src/data/course.ts` keeps the curriculum and testimonial content typed and separate from rendering.
- `src/components/` contains the header, page sections, curriculum, countdown, pricing, and registration flow.
- `src/App.tsx` assembles the experience; `src/main.tsx` only mounts the app.

## Development

```bash
npm install
npm run dev
npm run build
npm run format:check
```
