# School Portal Template

A modern school portal web application built with React, featuring a responsive design with dark mode support, event announcements, a gallery, and more.

## Features

- Home Page - Hero section with school information and announcements
- About Page - Mission, vision, values, and school history
- Gallery - Interactive image carousel with category-specific images
- Contact Us - Contact form and school information
- Login - User authentication page
- Dark Mode - Toggle between light and dark themes
- Announcements and Events - Calendar view with event filtering
- Responsive Design - Mobile-friendly with burger menu navigation
- Back to Top - Smooth scroll to top button

## Installation Steps

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) version 16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/school-portal.git
cd school-portal
```

### Step 2: Install Dependencies

```bash
npm install
```

Or:

```bash
yarn install
```

### Step 3: Add Required Assets

Place the following image file in the `public` folder:

- `school-hero.jpg` - Hero section background image for the home page

The project already includes reusable generic branding assets:

- `generic-logo.svg` - Generic logo used in the navigation bar
- `generic-favicon.svg` - Generic browser icon used as the favicon

### Step 4: Run the Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

### Step 5: Build for Production

```bash
npm run build
```

Or:

```bash
yarn build
```

The optimized files will be in the `dist` folder.

### Step 6: Preview Production Build

```bash
npm run preview
```

Or:

```bash
yarn preview
```

## Project Structure

```text
school-portal/
|-- public/
|   |-- generic-favicon.svg
|   |-- generic-logo.svg
|   `-- school-hero.jpg
|-- src/
|   |-- components/
|   |-- contexts/
|   |-- pages/
|   |-- styles/
|   |-- App.jsx
|   |-- App.css
|   |-- main.jsx
|   `-- index.css
|-- index.html
|-- package.json
`-- README.md
```

## Technologies Used

- React 19
- React Router DOM
- Vite
- CSS3

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

For questions or support, please contact your school administration team.
