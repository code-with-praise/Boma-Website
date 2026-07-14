---
name: Ethereal Union
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4d4635'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#7b5455'
  on-secondary: '#ffffff'
  secondary-container: '#fecbcb'
  on-secondary-container: '#7a5354'
  tertiary: '#5e5f5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b3b3b0'
  on-tertiary-container: '#444543'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ecbaba'
  on-secondary-fixed: '#2f1314'
  on-secondary-fixed-variant: '#613d3e'
  tertiary-fixed: '#e3e2e0'
  tertiary-fixed-dim: '#c7c6c4'
  on-tertiary-fixed: '#1a1c1a'
  on-tertiary-fixed-variant: '#464745'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is centered on a romantic, high-end editorial aesthetic that celebrates the union of Boma and Femi. The brand personality is sophisticated yet warm, evoking the feeling of a premium garden wedding. The style leans into **Minimalism** with a touch of **Glassmorphism** to maintain an airy, ethereal quality. 

The target audience consists of wedding guests seeking information and a glimpse into the couple’s journey. The UI should evoke an emotional response of joy, elegance, and timelessness. Expect heavy use of whitespace, delicate transitions, and a focus on high-quality photography framed by refined digital stationery elements.

## Colors

The palette is anchored in a trio of celebratory tones:
- **Champagne Gold (Primary):** Used for accents, high-level CTAs, and decorative icons. It represents the premium nature of the event.
- **Blush Pink (Secondary):** A soft, romantic hue used for subtle backgrounds, secondary buttons, and decorative highlights.
- **Off-White/Cream (Tertiary):** The primary canvas color, providing a softer, more sophisticated look than pure white.
- **Deep Charcoal (Neutral):** Used exclusively for typography to ensure high legibility while remaining softer than pure black.

Color application should follow a 70/20/10 distribution to maintain a sense of lightness and "air."

## Typography

This design system utilizes a classic serif/sans-serif pairing to achieve an editorial look. 
- **Playfair Display** is used for all headings and names, providing a timeless, literary feel. 
- **Plus Jakarta Sans** is used for all functional text, RSVPs, and body copy. Its modern, rounded terminals keep the design from feeling too rigid or traditional.

For large displays, use negative letter spacing for headlines to create a tighter, more professional "magazine" appearance. For labels and small metadata, use wide letter spacing and uppercase styling to add a touch of modern luxury.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the integrity of the editorial compositions, transitioning to a fluid model on mobile. 
- **Desktop:** 12-column grid with a maximum width of 1120px. 
- **Mobile:** Single column with generous 20px side margins.

Spacing is intentionally oversized. Sections should be separated by at least 120px on desktop to allow photography and typography to breathe. Use a 4pt/8pt scale for internal component spacing to maintain mathematical harmony. Components should favor vertical rhythm over horizontal density.

## Elevation & Depth

To maintain an "airy" and "ethereal" aesthetic, this design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Glassmorphism**:
- **Surfaces:** Use high-transparency Off-White (#FAF9F6 at 80% opacity) with a 12px backdrop blur for overlays and navigation bars.
- **Shadows:** Only use extremely diffused, low-opacity shadows (Color: #D4AF37 at 8% opacity, Blur: 30px) for "floating" elements like RSVP cards or image galleries.
- **Borders:** Use ultra-thin (1px) borders in Champagne Gold at 30% opacity to define structural elements without creating visual noise.

## Shapes

The shape language is **Soft** and refined. Avoid fully circular "pill" shapes for buttons to maintain a more formal tone. Instead, use consistent 4px (Soft) corner radii for buttons, input fields, and image containers. 

For decorative elements, incorporate "arch" shapes (u-shaped containers) for photographs, nodding to traditional wedding architecture and altars. Geometric accents should be thin-stroked diamonds or lines in Champagne Gold.

## Components

### Buttons
- **Primary:** Champagne Gold background, Charcoal text, 4px radius. Subtle scale-up animation on hover.
- **Secondary:** Transparent background, 1px Blush Pink border, Charcoal text.

### RSVP Input Fields
- Underlined style rather than fully enclosed boxes to mimic high-end stationery. 
- Focused state changes the underline color to Champagne Gold with a subtle 2px thickness.

### Cards & Containers
- **Gallery Cards:** Images should have a 1px inset border of Off-White to create a "matted photo" effect.
- **Schedule Cards:** Left-aligned typography with a thin vertical Champagne Gold line acting as a timeline connector.

### Specific Components
- **Countdown Timer:** Large Playfair Display numbers with Label-Caps styling for units (DAYS, HOURS, MINS).
- **Gift Registry Chips:** Soft Blush background with Primary Gold icons; used to categorize store links.
- **Floral Accents:** SVG-based botanical illustrations positioned at the corners of sections, using a subtle fade-in scroll animation.