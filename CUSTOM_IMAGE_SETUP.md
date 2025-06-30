# 🖼️ Adding Your Custom Hero Image

## Quick Setup:

1. **Prepare your image:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 800x600px or larger
   - Content: Should represent accessibility, education, or sign language

2. **Add the image:**
   - Rename your image to: `custom-hero-image.jpg`
   - Place it in the `public/` folder
   - The file path should be: `public/custom-hero-image.jpg`

3. **That's it!** 
   - The image will automatically appear in the hero section
   - If the image doesn't load, it will show a fallback design

## Alternative file names:
If you want to use a different filename, update the `src` in `src/components/sections/Hero.jsx`:
```javascript
src="/your-image-name.jpg"
```

## Supported formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Image suggestions:
- Students in a classroom with accessibility features
- Sign language interpretation in action
- Modern educational technology
- Diverse group of students learning together
- Any image that represents inclusive education

The image will be displayed with rounded corners and a subtle shadow effect! 