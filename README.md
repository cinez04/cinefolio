# 🎨 Mini Portfolio — cine

A one-page personal portfolio built with **React + Vite**.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── Hobbies/
│   │   ├── Hobbies.jsx
│   │   └── Hobbies.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── Achievements/
│   │   ├── Achievements.jsx
│   │   └── Achievements.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── data/
│   └── config.js       ← ✏️ EDIT YOUR INFO HERE
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## ✏️ How to Personalize

All your personal info lives in **`src/data/config.js`**. Open that file and edit:

| Field | What to edit |
|---|---|
| `name` | Your full name |
| `nickname` | Short name shown in logo & footer |
| `tagline` | Your personal bio/tagline |
| `school` | Your school/university |
| `socials.github` | Your GitHub URL |
| `socials.linkedin` | Your LinkedIn URL |
| `socials.email` | Your email address |
| `socials.behance` | Your Behance URL (or `""` to hide) |
| `hobbies` | Add/remove hobby objects |
| `skills` | Add/remove skill strings |
| `projects` | Add/edit projects (title, description, tags, image) |
| `achievements` | Add/edit awards and certifications |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🛠️ Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 🎨 Theme Color

The main color is `#0063a7`. To change it, edit `--blue` in `src/styles/global.css`:

```css
:root {
  --blue: #0063a7; /* ✏️ Change this */
}
```
