# Penko Software Hub

Official landing page and project showcase for Penko Software - a collection of free, open-source Progressive Web Apps (PWAs) for office productivity, language learning, music, creativity, and more.

## Overview

Penko Software Hub is a modern, responsive web application that serves as the central hub for discovering and accessing all Penko Software projects. Built with React and TypeScript, it features a clean interface with multi-language support, dark mode, and comprehensive project information.

## Features

- **22 Projects Showcase** - Display of all Penko Software applications across 7 categories
- **Multi-Language Support** - Full internationalization with support for multiple languages
- **Dark Mode** - Seamless light/dark theme switching with persistent preferences
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Category Filtering** - Easy browsing by project category
- **Project Status Badges** - Visual indicators for Live, Alpha, Beta, and Coming Soon projects
- **Donation Integration** - Support options via PayPal, Ko-fi, Bitcoin, and Ethereum
- **Privacy-First** - No tracking, no ads, no data collection

## Technology Stack

- **Framework**: React 19.2.1
- **Language**: TypeScript
- **Build Tool**: Vite 6.2.0
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (inline styles)
- **Type Safety**: TypeScript with strict mode

## Project Categories

1. **Office Suite** - Productivity applications (Writer, Calc, Note, Slide, etc.)
2. **Language Learning** - Educational tools (Adventure, Typing)
3. **Music Platform** - Music streaming and distribution (Tune)
4. **Creative Tools** - Design and editing software (PDF, Vector, Image, Cut)
5. **Enterprise Suite** - Business applications (DB, Campus, HCM, ERP)
6. **Privacy & Security** - Data protection tools (Private)
7. **Health & Wellness** - Personal transformation (Glow)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/penkosoftware/penko-software-hub.git
cd penko-software-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
penko-software-hub/
├── components/          # React components
│   ├── ProductGrid.tsx     # Main product showcase
│   ├── DonationSection.tsx # Donation options
│   └── PricingTable.tsx    # Pricing information
├── App.tsx             # Main application component
├── AppContext.tsx      # Global state management (theme, language)
├── constants.ts        # Product data and configuration
├── types.ts            # TypeScript type definitions
├── translations.ts     # Multi-language translations
├── index.tsx           # Application entry point
├── index.html          # HTML template with Tailwind CSS
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Configuration

### Adding a New Project

Edit `constants.ts` and add a new product to the `PRODUCTS` array:

```typescript
{
  id: 'project-id',
  name: 'Project Name',
  description: 'Project description',
  category: ProductCategory.OFFICE,
  iconName: 'FileText', // Lucide icon name
  repoUrl: 'https://github.com/penkosoftware/project',
  liveUrl: 'https://project.penko.software',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  imageUrl: 'https://picsum.photos/id/1/800/600',
  status: 'alpha', // 'live' | 'alpha' | 'beta' | 'coming-soon'
  version: 'v1.0.0'
}
```

### Adding Translations

Update `translations.ts` with new translation keys for all supported languages.

### Customizing Theme

Theme colors and styling are defined in the inline `<style>` tag in `index.html` using Tailwind CSS utility classes.

## Active Projects

Currently showcased projects include:

- **Penko Adventure** (Alpha) - RPG-based language learning with AI storytelling
- **Penko Writer** (Alpha) - Privacy-first word processor
- **Penko Tune** (Alpha) - Music platform with 0% artist fees
- **Penko Typing** (Alpha) - Retro arcade-style typing game

...and 18 more coming soon!

## Development

### Component Architecture

- `App.tsx` - Main layout with Navbar, Hero, ProductGrid, DonationSection, Privacy, and Footer
- `AppContext.tsx` - Provides global state for theme and language preferences
- `ProductGrid.tsx` - Renders filterable product cards
- `DonationSection.tsx` - Displays donation options
- `PricingTable.tsx` - Shows pricing information (free forever)

### State Management

The application uses React Context (`AppContext`) for managing:
- Dark mode preference (persisted to localStorage)
- Language selection (persisted to localStorage)
- Translations based on selected language

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## Privacy & Transparency

- **No tracking** - Zero analytics or telemetry
- **No data collection** - All preferences stored locally
- **No ads** - Completely ad-free experience
- **Open source** - Full source code available for audit
- **Free forever** - No hidden costs or subscriptions

## Support

If you find this project useful, consider supporting Penko Software development:

- **PayPal**: https://paypal.me/penkosoftware
- **Ko-fi**: https://ko-fi.com/penkosoftware
- **Bitcoin**: bc1q6p40harkyh0uxkcv5dpdvz5uygkuvqdv2j5skk
- **Ethereum**: 0xb16004d26d6ae9370ef2b7a9ed9c6fb2fb56e3c5

## Links

- **Website**: https://penko.software
- **GitHub**: https://github.com/penkosoftware
- **Projects**: All projects are accessible through the hub interface

## Acknowledgments

- Built with [React](https://react.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Placeholder images from [Picsum](https://picsum.photos/)

---

**Made with care by Penko Software** | Free Forever | GPL-3.0 Licensed
