# Mouse Tracker

A simple and interactive mouse position tracker built with React and Vite. This project displays your mouse coordinates in real-time as you move your cursor across the screen.

## Features

- 🖱️ Real-time mouse position tracking
- 📍 Display X and Y coordinates
- ⚡ Built with Vite for fast development
- ⚙️ Modern React 19 setup
- 🎨 Clean and simple UI

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd mouse-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started

### Development Server

To run the project in development mode:
```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port). Open your browser and move your mouse around to see the coordinates update in real-time.

### Build for Production

To create an optimized production build:
```bash
npm run build
```

The built files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

### Lint Code

To check for code quality issues:
```bash
npm run lint
```

## Project Structure

```
mouse-tracker/
├── src/
│   ├── App.jsx           # Main application component with mouse tracking logic
│   ├── App.css           # Application styles
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Static files
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## How It Works

The Mouse Tracker uses React hooks to:
1. **useState**: Maintains the current mouse position (x, y coordinates)
2. **useEffect**: Attaches a `mousemove` event listener on component mount and removes it on unmount

As you move your mouse, the event listener captures the coordinates and updates the state, which is then displayed on the page.

## Technologies Used

- **React** 19.2.7 - UI library
- **Vite** 8.1.1 - Build tool and dev server
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Styling

## Development Tools

- **TypeScript** - Optional type checking
- **Oxlint** - Code linting for quality assurance
- **Vite React Plugin** - Optimized React setup

## Browser Support

This project works in all modern browsers that support:
- ES6+ JavaScript
- React 19
- DOM event listeners

## Future Enhancements

Potential features to add:
- Mouse position history/trail
- Click tracking
- Keyboard input detection
- Custom cursor styles
- Statistics and analytics

## License

This project is open source and available for personal and educational use.

## Author

Created with ❤️

---

**Happy tracking! 🎯**