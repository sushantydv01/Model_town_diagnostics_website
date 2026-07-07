# Design Foundation Documentation

## Overview
Model Town Diagnostics employs a design philosophy described as **"Apple × Linear × Premium Healthcare"**. 
The visual language is carefully tailored to evoke a **Calm, Trustworthy, Premium, Clinical, Modern, and Minimal** environment.

We strictly avoid:
- Startup aesthetics
- Generic AI website appearance
- Heavy gradients
- Loud colors
- Excessive glassmorphism
- Exaggerated animations or bounces

---

## The Token System
Our design token system is exclusively powered by modern CSS Variables combined seamlessly with **Tailwind CSS v4** (`@theme` directive in `index.css`).

**Hardcoding visual values (e.g., `#0F766E` or `16px`) in components is strictly forbidden.** Always use semantic Tailwind utility classes mapped from our tokens.

---

## Core Tokens Breakdown

### 1. Color Philosophy
Colors are semantic and contextual. Light mode is the default; Dark mode `.dark` overrides these base tokens dynamically.

| Token | Utility Class Example | Description |
|---|---|---|
| Background | `bg-background` | Page backdrops (`#F8FAFC` light / `#0F172A` dark) |
| Surface | `bg-surface` | Default component containers (Cards, Modals) |
| Surface Elevated | `bg-surface-elevated` | Raised surfaces (Dropdowns, Sticky Navs) |
| Primary | `text-primary`, `bg-primary` | Main interactive brand color (`#0F766E`) |
| Text Primary | `text-text-primary` | Main heading and body text |
| Text Secondary | `text-text-secondary` | Supporting text, descriptions |
| Border | `border-border` | Default subtle borders |
| Focus Ring | `focus:ring-focus-ring` | A11y focus rings |

**Usage Example:**
```tsx
// ❌ WRONG (Hardcoded values, generic Tailwind colors)
<div className="bg-[#FFFFFF] text-teal-700">...</div>

// ✅ CORRECT (Semantic tokens)
<div className="bg-surface text-primary">...</div>
```

### 2. Typography Philosophy
**Font Families:** `Geist` (Primary) -> `Inter` (Fallback) -> `sans`.
Our typography tokens encapsulate size, line-height, and weight together to ensure consistent hierarchy across the app.

| Token | Utility Class Example | Settings |
|---|---|---|
| Display | `text-display` | 56px, lh: 1.1, bold |
| Heading 1 | `text-heading-1` | 40px, lh: 1.2, bold |
| Heading 2 | `text-heading-2` | 32px, lh: 1.2, semibold |
| Body | `text-body` | 16px, lh: 1.5, regular |
| Label | `text-label` | 14px, lh: 1.0, medium |

### 3. Spacing Philosophy
Spacing tokens are strict. We do not use arbitrary margin or padding.
Values map natively to tailwind spacing scales: `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`, `96`, `128` (px).

**Forms:**
- `h-input` (48px)
- `h-button` (44px)
- `gap-input`, `gap-label`, `gap-validation`

### 4. Shadow Philosophy
Shadows should feel professional, not overly dramatic. Tailwind defaults are replaced by custom tokens.
- `shadow-surface`: Barely visible depth.
- `shadow-raised`: For floating elements.
- `shadow-floating`: For highly elevated dropdowns.
- `shadow-overlay`: Modals and highest z-index items.
- `shadow-soft`: Very subtle depth for cards.

### 5. Motion Philosophy
Motion is subtle and purposeful. **No bounce.**
- `duration-fast` (150ms), `duration-normal` (300ms), `duration-slow` (500ms)
- `ease-standard`, `ease-enter`, `ease-exit`, `ease-hover`

### 6. Accessibility (A11y) Philosophy
All interactive elements must utilize the focus ring semantic token (`focus:ring-focus-ring`). It ensures a professional, visible, and keyboard-friendly focus state without compromising the clinical aesthetic.

---

## Adding New Tokens
If a new design requirement emerges, define the base variable in `:root` and map it inside the `@theme` directive in `frontend/src/index.css`. **Do not bypass the token system.**
