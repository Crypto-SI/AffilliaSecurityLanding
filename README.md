# Affillia Security Website

A professional website for Affillia Security, a personal close protection company serving high-net-worth individuals. The website features a clean, sophisticated design aligned with the company's brand identity, emphasizing discretion, professionalism, and security.

## Project Overview

This single-page website with a separate contact page was built using Next.js 15, shadcn/ui, React, and Tailwind CSS. The design implements the brand guidelines outlined in the project documentation, featuring a color palette of navy blue, gold, and off-white.

## Features

- Responsive layout optimized for all device sizes
- Clean, professional design reflecting the company's focus on high-net-worth clients
- Homepage sections:
  - Navigation bar
  - Hero section
  - About Us
  - Services (Personal Protection, Residential Security, Risk Assessment)
  - Why Choose Us
  - Call to Action
  - Footer
- Separate contact page with form for inquiries

## Tech Stack

- **Framework:** Next.js 15
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Docker support

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Support

### Production

To build and run the application in a production Docker container:

```bash
# Build the Docker image
docker build -t affillia-security .

# Run the container
docker run -p 3000:3000 affillia-security
```

Alternatively, use docker-compose:

```bash
# Build and run with docker-compose
docker-compose up --build
```

### Development

For local development with hot reloading:

```bash
# Build and run the development container
docker-compose -f docker-compose.dev.yml up --build
```

The application will be available at http://localhost:3000, and changes to your code will automatically trigger a rebuild.

## Project Structure

- `/app` - Next.js application pages and layout
- `/components` - Reusable UI components
- `/src` - Source code including shadcn/ui components
- `/public` - Static assets including images
- `/context` - Project documentation and planning files

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

© 2025 Affillia Security. All rights reserved.
