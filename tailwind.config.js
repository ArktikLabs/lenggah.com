/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Lenggah Brand Colors
        "primary-ivory": "#F4E8E1", // Primary (60%) - Background base
        "secondary-wood": "#CEC5AD", // Secondary (30%) - Content blocks/cards
        "accent-forest": "#0B5509", // Accent (10%) - CTAs only
        "text-charcoal": "#302621", // Supporting Dark - Text/headings
        "tertiary-earth": "#836539", // Tertiary - Icons/borders/details
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
        "wood-texture":
          "url('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
