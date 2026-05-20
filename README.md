# My Portfolio Website

A modern, professional portfolio website built with React, featuring stunning 3D animated backgrounds and smooth animations.

## 🚀 Features

- ✨ Modern and clean design
- 🎨 3D animated particle background
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations with Framer Motion
- 🎯 Easy to customize
- 🌐 Fast and optimized

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **CSS3** - Styling

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit `src/components/Hero.jsx` to update your name and title
2. **About Section**: Edit `src/components/About.jsx` to add your story
3. **Skills**: Edit `src/components/Skills.jsx` to add/remove skills
4. **Projects**: Edit `src/components/Projects.jsx` to showcase your work
5. **Contact**: Edit `src/components/Contact.jsx` to add your contact details

### Add Your Photo

Replace the placeholder in `src/components/About.jsx`:
```jsx
<div className="image-placeholder">
  <img src="/path-to-your-photo.jpg" alt="Your Name" />
</div>
```

### Change Colors

The main gradient colors are defined in the CSS files. Look for:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change `#667eea` and `#764ba2` to your preferred colors.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx  # 3D particle animation
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Hero.jsx                # Landing section
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills section
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Contact.jsx             # Contact form
│   │   └── Footer.jsx              # Footer
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 📝 To-Do

- [ ] Add your personal information
- [ ] Replace placeholder photo
- [ ] Add your real projects
- [ ] Update contact information
- [ ] Add your social media links
- [ ] Customize colors to match your brand
- [ ] Add more sections if needed

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Filmon Amare**
- Location: Mekelle, Tigray, Ethiopia
- Email: filmonamare70@gmail.com
- Phone: +251 968 748 912

---

Built with ❤️ in Mekelle, Tigray
