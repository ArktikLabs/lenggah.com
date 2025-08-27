# OG Image Generation

## Current Status

The OG images (`og-id.png` and `og-en.png`) are currently placeholder files. You need to create actual images for proper social media sharing.

## Creating OG Images

### Option 1: Design Tools

- **Figma**: Use the template size 1200x630px
- **Canva**: Search for "Facebook Post" or "Open Graph" templates
- **Adobe Photoshop/Illustrator**: Create images at 1200x630px

### Option 2: Online OG Image Generators

- [OpenGraph.xyz](https://opengraph.xyz/)
- [Social Image Generator](https://www.bannerbear.com/tools/social-image-generator/)
- [OG Image Playground](https://og-playground.vercel.app/)

### Option 3: Programmatic Generation

You can use the existing API route code to generate static images:

1. Run the original API route locally
2. Make requests to generate images for both languages
3. Save the generated images as static files
4. Replace the placeholder files

### Image Requirements

- **Size**: 1200x630 pixels
- **Format**: JPG or PNG
- **File size**: < 5MB (recommended < 1MB)
- **Content**: Should represent your brand and include key messaging

### Content for Each Language

**Indonesian (`og-id.png`)**:

- Title: "Lenggah — Furnitur & Desain Interior Kustom"
- Subtitle: "Kenyamanan yang terasa, estetika yang bertahan"
- Badge: "Kustom • Fungsional • Tahan Lama"

**English (`og-en.png`)**:

- Title: "Lenggah — Custom Furniture & Interior Design"
- Subtitle: "Comfort you can feel, aesthetics that last"
- Badge: "Custom • Functional • Durable"

## Implementation

Once you have the actual images:

1. Replace `/public/og/og-id.png` with your Indonesian OG image
2. Replace `/public/og/og-en.png` with your English OG image
3. Rebuild the site: `npm run build`
