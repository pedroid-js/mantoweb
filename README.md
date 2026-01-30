# Mantossalvo - Campaign Website

A modern, animated, parallax-heavy website for the global $1 fundraising campaign to protect Earth's mantle layer. Built with premium UI/UX design, smooth animations, and exceptional motion design.

## 🌍 Overview

**Campaign:** "Organiza una cuestación mundial de 1 dollar para proteger la capa del manto de la tierra"

**Domain:** mantossalvo.com

This website showcases a futuristic humanitarian-tech campaign with:
- ✨ Premium, modern design with dark/light theme
- 🎬 Smooth parallax effects across multiple sections
- 🎨 Sophisticated animations and micro-interactions
- ♿ Full accessibility support
- 📱 Fully responsive design
- 🚀 Optimized performance

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## 🏗 Project Structure

```
mantoWeb/
├── app/
│   ├── layout.tsx          # Root layout with theme & navigation
│   ├── page.tsx            # Landing page
│   ├── donate/
│   │   └── page.tsx        # Donation page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── globals.css         # Global styles & theme variables
├── components/
│   ├── Navbar.tsx          # Sticky navigation with blur backdrop
│   ├── Footer.tsx          # Footer with links and social
│   ├── HeroParallax.tsx    # Parallax hero with layered backgrounds
│   ├── StatCounter.tsx     # Animated count-up statistics
│   ├── CardGrid.tsx        # Staggered card grid with hover effects
│   ├── AccordionFAQ.tsx    # Animated FAQ accordion
│   ├── DonationWidget.tsx  # Interactive donation form
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── LanguageToggle.tsx  # ES/EN language switcher
├── lib/
│   ├── motion.ts           # Shared animation variants
│   ├── parallax.ts         # Parallax hooks and utilities
│   └── constants.ts        # Content and configuration
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design Features

### Theme System
- Dark-first design with clean light mode
- CSS custom properties for theme tokens
- Persistent theme preference via localStorage
- Smooth theme transitions

### Color Palette
- **Background:** Deep charcoal (dark) / Clean white (light)
- **Accent:** Cyan (#22d3ee) - Primary CTA color
- **Primary:** Blue (#3b82f6) - Secondary accents
- **Secondary:** Purple (#8b5cf6) - Tertiary accents

### Typography
- Font: Inter (variable font)
- Strong hierarchy: Large hero headlines, punchy subheads, crisp body text
- Responsive font sizes

### Motion Design Principles
- **Easing:** circOut (cubic-bezier) for natural motion
- **Duration:** 200-600ms for most transitions
- **Parallax:** Multi-layered backgrounds with 0.3-0.6 scroll speeds
- **Hover:** Lift + shadow + glow effects
- **Scroll reveals:** Subtle opacity + y transforms
- **Reduced motion:** Full support for `prefers-reduced-motion`

## 🌐 Pages

### Landing Page (`/`)
- **Hero:** Parallax background with gradient mesh, particles, and primary headline
- **Stats:** Animated count-up counters for participants, countries, and dollars raised
- **Problem:** Explanation of Earth's mantle with abstract visualization
- **Solution:** Three-step plan in card format
- **Impact:** Progress bar and impact metrics
- **Transparency:** Allocation breakdown with animated charts
- **FAQ:** Accordion-style questions and answers
- **Final CTA:** Large call-to-action block

### Donate Page (`/donate`)
- Interactive donation widget with preset and custom amounts
- Currency selector (USD/EUR)
- Email opt-in for updates
- Security reassurance with trust indicators
- Demo mode warning (no real payment processing)

### About Page (`/about`)
- Mission statement
- Timeline of campaign journey
- Team member cards (placeholders)
- Partner logos section (placeholders)

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive controls
- Keyboard navigation support
- Focus states visible
- `prefers-reduced-motion` support
- Color contrast meets WCAG AA standards

## 🎯 Performance

- Next.js automatic code splitting
- Image optimization with `next/image`
- Lazy loading for below-fold content
- Transform-only animations (GPU accelerated)
- Minimal bundle size
- Lighthouse score optimized

## 🌍 Internationalization

Basic ES/EN language toggle implemented:
- Content stored in `lib/constants.ts`
- Language switcher in navbar
- Both English and Spanish versions of all content
- Default: Spanish (as per campaign requirement)

## 🔧 Customization

### Updating Content
Edit `lib/constants.ts` to modify:
- Navigation links
- Hero text
- Section content
- FAQ items
- Stats data

### Changing Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --accent: YOUR_COLOR;
  --primary: YOUR_COLOR;
  /* etc. */
}
```

### Modifying Animations
Edit animation variants in `lib/motion.ts`:
```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { /* ... */ }
};
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in `.next/` directory, ready for deployment.

## 🐛 Known Limitations

- Payment processing is demo-only (no real transactions)
- Team photos and partner logos are placeholders
- Language switching is basic (no deep i18n routing)
- Social links are placeholder URLs

## 🤝 Contributing

This is a campaign website. For improvements:
1. Follow the existing code style
2. Maintain TypeScript strict mode
3. Ensure accessibility standards
4. Test across devices and browsers
5. Preserve animation performance

## 📄 License

© 2026 Mantossalvo. All rights reserved.

## 🎉 Key Engineering Highlights

1. **Clean Architecture:** Modular components, separation of concerns
2. **Type Safety:** Strict TypeScript, no `any` types
3. **Animation Performance:** GPU-accelerated transforms, 60fps target
4. **Accessibility First:** WCAG compliant, keyboard navigable
5. **Modern Stack:** Latest Next.js App Router, React Server Components where applicable
6. **Design System:** Consistent spacing, typography, and color tokens
7. **Motion Design:** Professional parallax and micro-interactions
8. **Responsive:** Mobile-first approach, tested across breakpoints

---

**Built with ❤️ for planetary protection**
