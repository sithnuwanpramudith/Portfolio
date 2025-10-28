# Portfolio Website Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based Design inspired by modern developer portfolios like Linear and Notion, emphasizing clean aesthetics and professional presentation for a tech-focused audience.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 220 85% 10% (deep navy)
- Background: 0 0% 98% (off-white)
- Accent: 210 100% 56% (professional blue)
- Text: 220 15% 25% (charcoal)

**Dark Mode:**
- Primary: 220 25% 95% (light gray)
- Background: 220 25% 8% (dark navy)
- Accent: 210 100% 65% (bright blue)
- Text: 220 15% 85% (light charcoal)

### Typography
- **Primary Font:** Inter (Google Fonts) - clean, modern sans-serif
- **Accent Font:** JetBrains Mono (Google Fonts) - for code snippets and technical elements
- **Hierarchy:** text-4xl/3xl for headings, text-lg for body, text-sm for captions

### Layout System
**Spacing:** Consistent use of Tailwind units: 4, 8, 12, 16 for margins/padding (p-4, m-8, gap-12, space-y-16)

### Component Library
- **Navigation:** Fixed header with smooth scroll navigation
- **Cards:** Elevated project cards with subtle shadows and hover effects
- **Buttons:** Primary (filled) and secondary (outline) variants
- **Forms:** Clean contact form with proper validation states
- **Timeline:** Education and experience progression display

## Visual Treatment

### Hero Section
- **Background:** Subtle gradient from 220 25% 8% to 220 35% 12%
- **Layout:** Split design with professional headshot on left, introduction on right
- **CTA:** Single prominent "View Projects" button

### Content Sections
- **Skills:** Grid layout with technology icons and proficiency indicators
- **Projects:** Card-based layout with project thumbnails, descriptions, and tech stacks
- **Education:** Timeline format showing academic progression
- **Contact:** Clean form with social links integration

### Gradients
- **Hero Background:** Subtle dark gradient for depth
- **Card Hover States:** Light gradient overlays
- **Button States:** Gradient backgrounds for primary actions

## Images
- **Hero Image:** Professional headshot (300x300px) - clean background, business casual attire
- **Project Thumbnails:** Screenshots or mockups of E-Commerce site and Student Management System
- **Technology Icons:** Use Heroicons or similar icon library for skill representation
- **Background:** No large hero image - focus on clean typography and content hierarchy

## Key Principles
1. **Professional Focus:** Emphasize technical skills and project outcomes
2. **Minimal Complexity:** 4-5 main sections maximum
3. **Content Hierarchy:** Lead with strongest projects and skills
4. **Responsive Design:** Mobile-first approach with desktop enhancements
5. **Performance:** Fast loading with optimized assets and minimal animations

## Accessibility
- Consistent dark/light mode toggle
- High contrast ratios in both modes
- Semantic HTML structure
- Keyboard navigation support