# Lenggah Design System - Standardization Guide

## 🎨 Typography System

### Hierarchy and Usage

| Class              | Size            | Usage                       | Example                              |
| ------------------ | --------------- | --------------------------- | ------------------------------------ |
| `.text-display`    | 4xl → 5xl → 6xl | Hero headlines, main titles | Page titles, hero sections           |
| `.text-heading-1`  | 3xl → 4xl       | Section headers             | About, Services, Contact             |
| `.text-heading-2`  | 2xl → 3xl       | Subsection headers          | FAQ questions, testimonials          |
| `.text-heading-3`  | xl              | Card titles, small headers  | Service titles, portfolio items      |
| `.text-heading-4`  | lg              | Minor headers               | Footer sections, form labels         |
| `.text-body-large` | lg → xl         | Important descriptions      | Hero subtitles, section descriptions |
| `.text-body`       | base            | Standard content            | Paragraphs, general text             |
| `.text-body-small` | sm              | Supporting text             | Captions, metadata, form hints       |
| `.text-caption`    | xs              | Fine print                  | Copyright, credits, disclaimers      |

### Implementation Examples

```tsx
// Hero Section
<h1 className="text-display text-white mb-6 font-serif">
  Main Hero Title
</h1>
<p className="text-body-large text-gray-200 mb-10">
  Hero description text
</p>

// Section Header
<h2 className="text-heading-1 text-text-charcoal mb-6 font-serif">
  Section Title
</h2>
<p className="text-body-large text-text-charcoal/70">
  Section description
</p>

// Card Content
<h3 className="text-heading-3 text-text-charcoal mb-4">
  Card Title
</h3>
<p className="text-body text-text-charcoal/70">
  Card description
</p>
```

## 🔘 Button System

### Sizes and Specifications

| Size | Height      | Padding   | Text Size | Icon Size      | Usage                        |
| ---- | ----------- | --------- | --------- | -------------- | ---------------------------- |
| `sm` | 36px (h-9)  | px-4 py-2 | text-sm   | 16px (w-4 h-4) | Secondary actions, filters   |
| `md` | 44px (h-11) | px-6 py-3 | text-base | 20px (w-5 h-5) | Standard buttons, navigation |
| `lg` | 56px (h-14) | px-8 py-4 | text-lg   | 24px (w-6 h-6) | Primary CTAs, hero buttons   |

### Variants

- **Primary**: `accent-forest` background - Reserved for main CTAs only
- **Secondary**: `secondary-wood` background - Supporting actions
- **Outline**: `accent-forest` border - Alternative actions

## 📐 Spacing System

### Standard Classes

| Class                | Usage                 | Spacing                                |
| -------------------- | --------------------- | -------------------------------------- |
| `.spacing-section`   | Section padding       | py-16 md:py-20                         |
| `.spacing-container` | Max width container   | max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 |
| `.spacing-content`   | Content bottom margin | mb-12 md:mb-16                         |

### Implementation

```tsx
<section className="spacing-section bg-primary-ivory">
  <div className="spacing-container">
    <div className="spacing-content text-center">
      <h2 className="text-heading-1">Section Title</h2>
      <p className="text-body-large">Description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

## 🎯 Color Usage Guidelines

### Text Colors

- **Primary Text**: `text-text-charcoal` - Main content
- **Secondary Text**: `text-text-charcoal/80` - Supporting content
- **Tertiary Text**: `text-text-charcoal/70` - Less important content
- **Caption Text**: `text-tertiary-earth` - Metadata, labels

### Background Colors

- **Primary (60%)**: `bg-primary-ivory` - Main sections
- **Secondary (30%)**: `bg-secondary-wood` - Alternate sections
- **Accent (10%)**: `bg-accent-forest` - CTAs only

## 📱 Component Standards

### Cards

```tsx
// Primary card
<div className="card-primary p-6">
  <h3 className="text-heading-3 mb-4">Title</h3>
  <p className="text-body">Content</p>
</div>

// Secondary card
<div className="card-secondary p-6">
  <h3 className="text-heading-3 mb-4">Title</h3>
  <p className="text-body">Content</p>
</div>
```

### Form Elements

- **Labels**: `text-body-small font-medium text-text-charcoal`
- **Inputs**: `text-body` with consistent padding and borders
- **Help Text**: `text-caption text-text-charcoal/60`

### Icons

- **Small**: 16px (w-4 h-4) - Small buttons, inline icons
- **Medium**: 20px (w-5 h-5) - Standard buttons, navigation
- **Large**: 24px (w-6 h-6) - Large buttons, feature icons
- **XL**: 40px+ (w-10 h-10+) - Service icons, decorative

## ✅ Implementation Checklist

### Typography

- [ ] Replace all heading sizes with standardized classes
- [ ] Use consistent text sizes for body content
- [ ] Apply proper color hierarchy

### Buttons

- [ ] Standardize all button sizes
- [ ] Use appropriate variants for actions
- [ ] Consistent icon sizing

### Spacing

- [ ] Apply standard section spacing
- [ ] Use consistent container layouts
- [ ] Standardize content margins

### Colors

- [ ] Remove hardcoded color values
- [ ] Use brand color variables
- [ ] Follow 60-30-10 color rule

## 🔧 Migration Notes

1. **Global CSS**: Typography classes added to globals.css
2. **Button Component**: Enhanced with consistent sizing and icon scaling
3. **Color System**: Standardized using CSS custom properties
4. **Spacing**: Reusable classes for consistent layout

This system ensures visual consistency across the entire Lenggah website while maintaining the brand's calm, comfortable, and professional aesthetic.
