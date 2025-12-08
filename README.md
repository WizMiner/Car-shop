# Car Shop Website 🚗

**Car Shop** is a modern, responsive car dealership web application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It showcases vehicles, bookings, blogs, and services with fully pre-rendered static pages optimized for fast performance.  

This project demonstrates expertise in **full-stack development**, **static site generation**, and deploying **Next.js apps on cPanel**.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies & Tools](#technologies--tools)  
- [Installation](#installation)  
- [Development](#development)  
- [Build & Export](#build--export)  
- [Deployment on cPanel](#deployment-on-cpanel)  
- [Useful Commands](#useful-commands)  
- [Project Structure](#project-structure)  

---

## Project Overview

Car Shop is designed to provide:

- An online platform to showcase cars, services, and partners.  
- A booking system for car rentals.  
- Blog and testimonial management for customer engagement.  
- Optimized static site generation for fast loading and SEO.  

The project uses **Next.js App Router**, **SSG (Static Site Generation)**, and dynamic routing for detailed pages.

---

## Features

- Responsive layout with **Tailwind CSS**  
- Static pre-rendering for improved performance  
- Dynamic routes for:
  - `/cars/[id]`  
  - `/blogs/[id]`  
  - `/services/[id]`  
  - `/bookings/[id]`  
- Remote images support with `next/image`  
- Fully exportable static site for cPanel or any static hosting  
- Error handling and fallback pages (`404`, `_not-found`)  

---

## Technologies & Tools

- **Frontend Framework:** Next.js 16 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Version Control:** Git  
- **Hosting:** cPanel / Static Hosting  
- **Build Tools:** npm, Turbopack  
- **Image Optimization:** Next.js `unoptimized` remote patterns  
- **Deployment Strategy:** `next export` → static HTML  

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository_url>
cd car-shop
npm install


Set the environment variable for the API base URL:

```bash
export NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

## Development

Start the local development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## Build & Export

1. **Clean previous builds:**

```bash
npm run clean
```

2. **Build the project:**

```bash
npm run build
```

3. **Export static HTML files:**

```bash
npm run export
```

The static files will be generated in the `out/` directory.

4. **Inspect exported files:**

```bash
ls -R out
```

---

## Deployment on cPanel

1. **Zip the exported folder:**

```bash
zip -r out.zip out
```

2. **Upload** the zip file to your cPanel `public_html` or subdomain folder.

3. **Extract** the contents. Ensure the structure looks like:

```
public_html/
├─ index.html
├─ abouts/
├─ cars/
├─ blogs/
├─ _next/
...
```

4. **Optional `.htaccess`** for fallback routing:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

5. Visit your live site:

* `https://yourdomain.com/`
* `https://yourdomain.com/cars/1/`

---

## Useful Commands

| Command                         | Description                                                       |
| ------------------------------- | ----------------------------------------------------------------- |
| `npm run dev`                   | Start local development server with hot-reloading.                |
| `npm run build`                 | Build the production version of the app.                          |
| `npm run clean`                 | Remove `.next` folder to reset build artifacts.                   |
| `npm run start`                 | Start the production server (if not using static export).         |
| `npm run lint`                  | Run ESLint checks on the project.                                 |
| `npm run format`                | Auto-format code using Prettier (if configured).                  |
| `ls -R out`                     | List all exported static files recursively (after `next export`). |
| `ls -R .next/output/static`     | Inspect all static assets generated in `.next`.                   |
| `npx serve out`                 | Serve the exported static site locally for testing.               |
| `npx serve .next/output/public` | Serve the Next.js build output locally.                           |
| `npm run export`                | Export static HTML files to the `out/` directory.                 |

> Tip: Always set `NEXT_PUBLIC_API_BASE_URL` before running development or build commands.

---

## Project Structure

```
car-shop/
├─ app/                  # Next.js app directory (pages & routes)
├─ components/           # Reusable UI components
├─ lib/                  # API calls & data fetching
├─ public/               # Static assets (images, icons)
├─ utils/                # Utility functions
├─ out/                  # Static export after build
├─ next.config.ts        # Next.js configuration
├─ tailwind.config.js    # Tailwind CSS configuration
├─ package.json          # Project manifest
├─ tsconfig.json         # TypeScript configuration
└─ README.md             # Project documentation
```

---

## Expertise Demonstrated

* Full-stack web development with **Next.js**
* TypeScript for type-safe coding
* Static site generation and export for optimized performance
* Deployment on traditional **cPanel hosting**
* Dynamic routing, API integration, and responsive design
