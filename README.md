# Portfolio Website

Personal portfolio for Performance Marketing, SEO, Web Development & Marketing Technology.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open http://localhost:3000

## 📦 Deploy to Netlify

1. Push this folder to a GitHub repository
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## ✏️ Update Content

- **Your info** → edit `data/site.json`
- **Portfolio projects** → edit `data/projects.json`
- **Favicon** → replace `public/favicon.ico`

See `HOW_TO_UPDATE.md` for full guide (Bahasa Indonesia).

## 📁 Structure

```
├── data/
│   ├── site.json        ← Personal info, bio, skills, experience
│   └── projects.json    ← Portfolio case studies
├── pages/               ← Page files (Home, About, Projects, Contact)
├── components/          ← Reusable UI components
├── public/              ← Static files (favicon, images)
└── HOW_TO_UPDATE.md     ← Content update guide
```

## Tech Stack

- **Next.js 14** (Static Export)
- **Tailwind CSS**
- **Google Fonts** (Cormorant Garamond + DM Sans)
- **Netlify** for hosting
