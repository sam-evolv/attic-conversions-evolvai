# Attic Conversions Website

## Overview

A premium, conversion-focused website for Attic Conversions, a family-run attic conversion business in Dublin operating since 1995. The site is designed to elevate brand perception, make information easy to digest through progressive disclosure, and increase conversions through quote requests and calls. The flagship feature is an interactive "Attic Journey" flow that guides users through the conversion decision process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens for brand colors (primary red #990101, warm off-whites, charcoal text)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Typography**: Inter (body) and Playfair Display (headings) font families
- **State Management**: React Query (@tanstack/react-query) for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Build**: esbuild for server bundling, Vite for client bundling
- **Email**: Resend integration for contact form submissions

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Content**: Static content stored in `client/src/content/siteContent.ts` as a centralized data source

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # Reusable UI components (home/, layout/, journey/, ui/)
    content/      # Centralized site content and copy
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # In-memory storage implementation
  resend.ts       # Email client integration
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
```

### Key Design Patterns
1. **Content-Driven Architecture**: All site copy lives in `siteContent.ts` for easy iteration without hunting across pages
2. **Component Composition**: Layout components wrap pages; Section components handle consistent spacing and backgrounds
3. **Progressive Disclosure**: Information revealed through accordions, expandable sections, and the multi-step Attic Journey flow
4. **Mobile-First Responsive**: Components designed with mobile breakpoints as priority

### Pages
- Home (hero, trust bar, intro, testimonials, CTA)
- Attic Journey (5-step interactive guide)
- Services, Process, Costs & Timeline, FAQ, Contact

## External Dependencies

### Third-Party Services
- **Resend**: Email delivery for contact form submissions (configured via Replit Connectors)
- **PostgreSQL**: Database (requires DATABASE_URL environment variable)

### Key NPM Packages
- **@tanstack/react-query**: Server state management
- **drizzle-orm / drizzle-kit**: Database ORM and migrations
- **express**: HTTP server framework
- **wouter**: Client-side routing
- **@radix-ui/***: Accessible UI primitives
- **class-variance-authority**: Component variant styling
- **resend**: Email API client

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- Resend credentials via Replit Connectors (REPLIT_CONNECTORS_HOSTNAME, REPL_IDENTITY)

### CDN/External Resources
- Google Fonts: Inter and Playfair Display
- Unsplash: Hero background image