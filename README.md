# SlideScope Website

This is the marketing website for SlideScope - a professional microscopy image viewer application.

## 🎨 Design

The website features a clean, modern design that matches SlideScope's scientific and professional aesthetic:

- **Color Palette**: Scientific blue (#2563eb) and cyan (#06b6d4) matching the logo design
- **Layout**: Responsive, mobile-first design that works on all devices
- **Typography**: Clean, readable fonts optimized for technical content
- **Visual Elements**: Microscope-themed icons and gradients

## 📁 Structure

```
website/
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive features and animations
├── assets/
│   └── logo.png        # SlideScope logo (512x512)
└── README.md           # This file
```

## ✨ Features

The website includes:

1. **Hero Section** - Eye-catching introduction with logo and call-to-action buttons
2. **Supported Formats** - Showcases .czi, .nd2, and .svs file format support
3. **Features Grid** - Detailed cards for all 6 major features:
   - Drag & Drop Loading
   - Navigate Image Slices
   - Zoom & Pan
   - Display Metadata
   - Modular Architecture
   - Open Source
4. **Demo Video Section** - Placeholder ready for video recording
5. **Download Section** - Platform-specific download cards for Windows and macOS
6. **Responsive Navigation** - Fixed header with smooth scrolling
7. **Footer** - Links and branding

## 🎬 Adding a Demo Video

To add your demo video recording, replace the video placeholder in `index.html`:

1. Record your demo video showing SlideScope in action
2. Save it as `assets/demo-video.mp4` (or .webm for better compression)
3. Optionally create a poster image: `assets/video-poster.jpg`
4. In `index.html`, find the `<div class="video-placeholder">` section (around line 150)
5. Replace it with:

```html
<video controls poster="assets/video-poster.jpg">
    <source src="assets/demo-video.mp4" type="video/mp4">
    <source src="assets/demo-video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

## 🚀 Usage

### Local Development

Simply open `index.html` in a web browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or use a local server for better performance:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server installed)
npx http-server

# Then visit: http://localhost:8000
```

### Deployment

The website is a static site and can be deployed to any hosting service:

- **GitHub Pages**: Push to a `gh-pages` branch
- **Netlify**: Drag and drop the website folder
- **Vercel**: Connect your repository
- **Traditional hosting**: Upload files via FTP/SFTP

## 🎯 Customization

### Update Download Links

Edit the download button URLs in `index.html` (around line 175):

```html
<a href="https://github.com/yourname/slidescope/releases/download/v0.1.0/SlideScope-Windows.exe" 
   class="btn btn-primary btn-large">Download for Windows</a>
```

### Update GitHub Link

Replace the `#` in the footer and source code sections with your actual GitHub repository URL.

### Change Colors

Modify the CSS variables in `styles.css` (starting at line 9):

```css
:root {
    --primary-blue: #2563eb;
    --primary-cyan: #06b6d4;
    /* ... other colors */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (full layout with all features)
- **Tablet**: 481px - 768px (adjusted grid layouts)
- **Mobile**: ≤ 480px (single column, simplified navigation)

## ♿ Accessibility

The website includes:

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators for interactive elements
- Reduced motion support for users with vestibular disorders
- High contrast ratios for text readability

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **No build process** - Works immediately
- **Modern CSS** - Grid, Flexbox, CSS variables
- **Progressive Enhancement** - Works without JavaScript
- **Performance** - Optimized for fast loading

## 📄 License

Same license as SlideScope application.
