# MPHSI - Mother of Perpetual Help School Portal

A modern school portal web application built with React, featuring a responsive design with dark mode support, event announcements, gallery, and more.

## Features

- 🏠 **Home Page** - Hero section with school information and announcements
- 📖 **About Page** - Mission, vision, values, and school history
- 📸 **Gallery** - Interactive image carousel with category-specific images
- 📧 **Contact Us** - Contact form and school information
- 🔐 **Login** - User authentication page
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📅 **Announcements & Events** - Calendar view with event filtering
- 📱 **Responsive Design** - Mobile-friendly with burger menu navigation
- ⬆️ **Back to Top** - Smooth scroll to top button

## Installation Steps

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mphsi.git
cd mphsi
```

### Step 2: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Step 3: Add Required Assets

Place the following image files in the `public` folder:
- `school-logo.png` - School logo (used in navigation and browser favicon)
- `school-hero.jpg` - Hero section background image for the home page

### Step 4: Run the Development Server

Start the development server:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Step 5: Build for Production

To create a production build:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The optimized files will be in the `dist` folder.

### Step 6: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or using yarn:

```bash
yarn preview
```

## Project Structure

```
mphsi/
├── public/                 # Static assets
│   ├── school-logo.png    # School logo (required)
│   └── school-hero.jpg    # Hero background image (required)
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Announcements.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Calendar.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ImageCarousel.jsx
│   │   └── Navigation.jsx
│   ├── contexts/          # React Context providers
│   │   └── DarkModeContext.jsx
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── styles/            # CSS stylesheets
│   │   ├── About.css
│   │   ├── Announcements.css
│   │   ├── BackToTop.css
│   │   ├── Calendar.css
│   │   ├── Contact.css
│   │   ├── DarkModeToggle.css
│   │   ├── Gallery.css
│   │   ├── Home.css
│   │   ├── ImageCarousel.css
│   │   ├── Login.css
│   │   └── Navigation.css
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles and CSS variables
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Technologies Used

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with CSS variables for theming

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the school administration.
