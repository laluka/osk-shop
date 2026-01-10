# OffenSkill Website

[![Deploy Static Website](https://github.com/laluka/osk-shop/actions/workflows/deploy.yml/badge.svg)](https://github.com/laluka/osk-shop/actions/workflows/deploy.yml)

A modern, responsive website for OffenSkill - showcasing cybersecurity services including pentesting, training programs, and mentoring services. Built with React, TypeScript, and Tailwind CSS.

## 🚀 quick Start

```bash
npm install
npm run dev
```

## 🏗️ Production Build

```bash
npm run build
```

The production build will be created in the `dist/` directory.

## 📸 OpenGraph Thumbnails

To have nice previews when sharing links on social media, you can generate screenshots of your pages:

```bash
# One-time setup: install playwright and chromium
npx playwright install chromium

# Generate screenshots (runs a local dev server automatically)
npm run thumbnails
```

Thumbnails are saved in `public/assets/thumbnails/`. Make sure to commit them before pushing to GitHub!

## 📁 Project Structure

```
osk-shop/
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Application entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## 🛠️ Technology Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

##  License

This project is proprietary and confidential.

## 📧 Contact

For questions or support, contact: loukajc+shop@offenskill.com
