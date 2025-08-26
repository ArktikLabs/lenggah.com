# Lenggah Brand Color Implementation

## 🎨 Brand Color Palette

This document outlines the implementation of Lenggah's brand color palette across the website.

### Color Definitions

| Color Name         | Hex Code  | Usage                                            | Percentage |
| ------------------ | --------- | ------------------------------------------------ | ---------- |
| **Primary Ivory**  | `#F4E8E1` | Background base, main sections                   | 60%        |
| **Secondary Wood** | `#CEC5AD` | Content blocks, cards, subtle backgrounds        | 30%        |
| **Accent Forest**  | `#0B5509` | CTAs, buttons, highlights only                   | 10%        |
| **Text Charcoal**  | `#302621` | Headings, body text, high-contrast elements      | Supporting |
| **Tertiary Earth** | `#836539` | Icons, borders, hover states, decorative details | Supporting |

### Implementation in Tailwind Config

```javascript
colors: {
  // Lenggah Brand Colors
  'primary-ivory': '#F4E8E1',     // Primary (60%) - Background base
  'secondary-wood': '#CEC5AD',    // Secondary (30%) - Content blocks/cards
  'accent-forest': '#0B5509',     // Accent (10%) - CTAs only
  'text-charcoal': '#302621',     // Supporting Dark - Text/headings
  'tertiary-earth': '#836539',    // Tertiary - Icons/borders/details
}
```

## 📐 Design Guidelines Applied

### 1. **60-30-10 Color Balance**

- **Primary Ivory (60%)**: Used as main background in Hero, About, Contact sections
- **Secondary Wood (30%)**: Applied to Services and Portfolio sections for layered depth
- **Accent Forest (10%)**: Reserved exclusively for call-to-action buttons and interactive elements

### 2. **Typography Hierarchy**

- **Headings**: `text-charcoal` for optimal readability
- **Body Text**: `text-charcoal/80` and `text-charcoal/70` for content hierarchy
- **Secondary Text**: `tertiary-earth` for supporting information

### 3. **Component-Level Implementation**

#### Buttons

- **Primary**: `accent-forest` background with `primary-ivory` text
- **Secondary**: `secondary-wood` background with `text-charcoal` text
- **Outline**: `accent-forest` borders with hover fill

#### Cards

- **Background**: `primary-ivory` with `tertiary-earth/20` borders
- **Content**: Layered with appropriate text colors

#### Navigation

- **Header**: Dynamic colors based on scroll state
- **Active States**: `accent-forest` for current section indicators

#### Forms

- **Input Fields**: `secondary-wood/30` background with `tertiary-earth/30` borders
- **Focus States**: `accent-forest` focus rings

## 🎯 Brand Philosophy Integration

**"Lenggah" (to sit)** - The color palette reflects:

- **Calm**: Light, airy backgrounds create peaceful environments
- **Comfort**: Warm wood tones provide natural familiarity
- **Grounded**: Deep forest green anchors the design with stability

## ✅ Accessibility Considerations

- **Contrast Ratios**: All text combinations meet WCAG AA standards
- **Color Usage**: Never relying solely on color to convey information
- **Interactive Elements**: Clear visual hierarchy with accent color reserved for CTAs

## 🔄 Consistent Application

The color palette has been systematically applied across:

- ✅ Global CSS variables and utility classes
- ✅ Tailwind configuration (legacy colors removed)
- ✅ All UI components (Button, Card, Badge)
- ✅ Layout components (Header, Footer)
- ✅ Section components (Hero, About, Services, Portfolio, Contact)
- ✅ Form elements and interactive states

## 🌙 Dark Mode Consideration

CSS variables are prepared for future dark mode implementation:

```css
--primary-dark: #2a2017;
--secondary-dark: #3a3528;
--accent-light: #0f6b0c;
--text-light: #f4e8e1;
```

This implementation ensures Lenggah's brand identity is cohesively expressed through thoughtful color application that enhances user experience while maintaining visual hierarchy and accessibility standards.
