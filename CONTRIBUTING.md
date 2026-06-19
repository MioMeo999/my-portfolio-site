# Contribution Guide

## Development Workflow

### Getting Started

1. Clone repository
2. Install dependencies: `npm install`
3. Create `.env.local` with environment variables
4. Run dev server: `npm run dev`

### Code Style

- **TypeScript**: Strict mode enabled, all types required
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **Formatting**: ESLint configuration in `.eslintrc.json`

### Making Changes

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run type check: `npm run type-check`
4. Commit: `git commit -am "Description of changes"`
5. Push: `git push origin feature/my-feature`
6. Create Pull Request

### File Organization

```
src/
├── app/              # Next.js App Router
├── components/       # React components
│   ├── sections/    # Page sections
│   ├── Header.tsx
│   └── Footer.tsx
├── styles/          # Global styles
├── types/           # TypeScript types
└── utils/           # Utility functions (future)
```

### Performance Checklist

- [ ] No console errors/warnings
- [ ] All images have `alt` text
- [ ] Proper use of `next/image`
- [ ] Lazy loading for heavy components
- [ ] Lighthouse score > 90

---
