# Valentine's Day Proposal Website 💕

A funny and unique Valentine's Day proposal website with interactive elements and beautiful animations.

## 🎯 Features

- **Loading Animation**: Engaging progress bar that builds anticipation
- **Smooth Transitions**: Beautiful section-to-section navigation
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Interactive "No" Button**: The "No" button playfully moves away from the cursor!
- **Celebration Page**: Confetti and floating hearts when she says "Yes!"
- **Modern Design**: Romantic gradients, glassmorphism effects, and smooth animations

## 📁 Project Structure

```
FE_CODE/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet with design tokens
│   ├── animations.css      # Animation definitions
│   └── responsive.css      # Responsive design rules
└── js/
    ├── main.js             # Main application logic
    ├── animations.js       # Animation controllers
    └── interactions.js     # User interaction handlers
```

## 🚀 How to Test Locally

### Method 1: Direct File Opening
1. Navigate to the `FE_CODE` folder
2. Double-click `index.html` to open it in your default browser

### Method 2: Using a Local Server (Recommended)
If you have Python installed:

```bash
# Navigate to FE_CODE folder
cd "c:\Users\offic\Downloads\Valentines Day\FE_CODE"

# Python 3
python -m http.server 8000

# Then open in browser: http://localhost:8000
```

If you have Node.js installed:

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to FE_CODE folder
cd "c:\Users\offic\Downloads\Valentines Day\FE_CODE"

# Start server
http-server -p 8000

# Then open in browser: http://localhost:8000
```

### Method 3: Using VS Code Live Server
1. Open the `FE_CODE` folder in VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

## 🧪 Testing Checklist

- [ ] **Landing Page**: Loading animation completes and "Click to Start" button appears
- [ ] **Introduction**: Text animates in smoothly, "Continue" button works
- [ ] **Reasons Section**: All 6 cards display and animate with stagger effect
- [ ] **Question Page**: Both buttons appear
- [ ] **No Button Behavior**: Move your cursor toward the "No" button - it should move away!
- [ ] **Yes Button**: Clicking leads to celebration page
- [ ] **Celebration**: Confetti animation and floating hearts appear
- [ ] **Responsive**: Test on different screen sizes (resize browser window)
- [ ] **Mobile**: Test on your phone by opening the file

## 🎨 Customization Ideas

### Change Colors
Edit `css/styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-pink: #FF6B9D;        /* Change to your preferred color */
    --secondary-pink: #FFC2D1;      /* Adjust accent colors */
    /* ... more colors ... */
}
```

### Customize Text
Edit `index.html` to personalize:
- Introduction message
- Reasons why she's amazing (6 cards)
- The proposal question
- Celebration message

### Adjust Animations
Edit `css/animations.css` to change animation speeds or effects.

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Push the `FE_CODE` folder contents to the repository
3. Go to Settings → Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `FE_CODE` folder
3. Your site is live instantly!

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload the folder
3. Deploy with one click

## 💡 Tips for the Big Day

1. **Test Everything**: Make sure to test the entire flow before sending the link
2. **Check Mobile**: She'll likely open it on her phone first
3. **Share the Link**: Use a URL shortener for a cleaner link
4. **Have a Backup**: Have the ring ready regardless of technical issues!
5. **Timing**: Send the link when you know she has time to enjoy it

## 🐛 Troubleshooting

### The "No" button isn't moving
- Make sure JavaScript is enabled in the browser
- Try opening in a different browser (Chrome, Firefox, Safari)
- Check the browser console for errors (F12)

### Animations aren't working
- Ensure all CSS files are loading correctly
- Check that the file paths are correct
- Try hard refresh (Ctrl + Shift + R or Cmd + Shift + R)

### Page looks broken on mobile
- The design is responsive and should work on all devices
- Try rotating the device to landscape mode
- Ensure you're using a modern browser

## 📝 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ❤️ Good Luck!

Remember: The website is just the delivery method. Your love is what makes it special.

---

**Made with ❤️ for a special someone**
