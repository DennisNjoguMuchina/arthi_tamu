# Arthi Tamu Harvest — Image Directory Guide

## Folder Structure

```
assets/images/
├── branding/       ← DROP OFFICIAL LOGO FILE HERE (logo.png)
├── hero/           ← DROP HERO SECTION IMAGES HERE
├── story/          ← DROP OUR STORY SECTION IMAGES HERE
├── products/       ← DROP REAL PURPLE SWEET POTATO PRODUCT IMAGES HERE
├── field-notes/    ← DROP WEEKLY FARM JOURNAL IMAGES HERE (real photos only)
├── education/      ← DROP EDUCATION SECTION IMAGES HERE
```

## Image Requirements

All images should be:
- **Real and authentic** — no AI-generated farm imagery
- **High quality** — minimum 1200px wide
- **Optimized** — compressed for web (use tinypng.com or similar)
- **Documentary style** — warm, cinematic, natural lighting

## How to Add Field Notes Images

1. Take or select a real farm photo
2. Save it in: `assets/images/field-notes/`
3. Update the FIELD_NOTES array in `assets/js/main.js`

## How to Replace the Logo

1. Place your logo file in: `assets/images/branding/`
2. If the filename is different from `logo.png`, update the `src` in:
   - `index.html` line ~30 (navbar logo)
   - `index.html` footer section (footer logo)
