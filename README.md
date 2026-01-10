# OffenSkill Website

A modern, responsive website for OffenSkill - showcasing cybersecurity services including pentesting, training programs, and mentoring services. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Sleek design with smooth animations using Framer Motion
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Service Pages**: Dedicated pages for Pentesting, Training, and Mentoring services
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Type Safety**: Full TypeScript support for better developer experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.9.0 or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.0.0 or higher (comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

1. **Clone the repository** (or navigate to the project directory):

```bash
cd /DATA/pro/osk-shop
```

2. **Install dependencies**:

```bash
npm install
```

This will install all required packages including:
- React 19.2.0
- React Router DOM for navigation
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling
- TypeScript for type safety

## 💻 Development

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Development Features

- **Hot Module Replacement (HMR)**: Changes are reflected instantly without full page reload
- **Fast Refresh**: React components update without losing state
- **TypeScript Checking**: Real-time type checking in your IDE
- **ESLint**: Code quality and consistency checks

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Production Build

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
1. Runs TypeScript compiler to check for type errors
2. Bundles and minifies all assets using Vite
3. Optimizes images and other static assets
4. Generates source maps for debugging
5. Outputs everything to the `dist/` directory

### Build Output

The production build will be created in the `dist/` directory with:
- Minified JavaScript bundles
- Optimized CSS files
- Compressed assets
- HTML files with proper asset references

### Preview Production Build

Test the production build locally before deployment:

```bash
npm run preview
```

This serves the `dist/` directory on a local server (typically `http://localhost:4173`).

### Deployment

The `dist/` folder can be deployed to any static hosting service:

**Popular Options:**
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist/` folder or use Netlify CLI
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **Nginx/Apache**: Copy `dist/` contents to web server directory

**Important**: Ensure your hosting service is configured for Single Page Application (SPA) routing - all routes should redirect to `index.html`.

## 📁 Project Structure

```
osk-shop/
├── public/                  # Static assets
│   ├── assets/             # Images and media files
│   │   └── original/       # Original service images
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/         # Reusable React components
│   │   ├── AnimatedSection.tsx
│   │   ├── Layout.tsx
│   │   └── ServiceCard.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Pentest.tsx
│   │   ├── Training.tsx
│   │   ├── Mentoring.tsx
│   │   └── FAQ.tsx
│   ├── App.tsx             # Main app component with routing
│   ├── App.css             # App-specific styles
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

### Core
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety and better DX
- **Vite 7.2.4** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixing

### Routing & Animation
- **React Router DOM 7.12.0** - Client-side routing
- **Framer Motion 12.25.0** - Animation library

### UI Components
- **Lucide React 0.562.0** - Icon library

### Development Tools
- **ESLint 9.39.1** - Code linting
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting rules

## 🎨 Customization

### Tailwind Configuration

Modify `tailwind.config.js` to customize:
- Color palette
- Font families
- Spacing scale
- Breakpoints
- And more...

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`

### Styling

The project uses Tailwind CSS for styling. Global styles are in `src/index.css`.

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Build Errors

If you encounter build errors:

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check Node.js version (must be ≥20.9.0):
```bash
node --version
```

### Type Errors

Run TypeScript compiler to see all type errors:

```bash
npx tsc --noEmit
```

## 📝 License

This project is proprietary and confidential.

## 📧 Contact

For questions or support, contact: contact@offenskill.com
