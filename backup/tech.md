# Affillia Security Website - Technology Stack

This document outlines the core technologies and tools planned for the development and deployment of the Affillia Security website.

## Core Technologies

*   **Framework:** [Next.js](https://nextjs.org/)
    *   **Reasoning:** Chosen by the client. Provides server-side rendering (SSR), static site generation (SSG), routing, API routes, and a great developer experience for React applications.
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
    *   **Reasoning:** Chosen by the client. A collection of beautifully designed, accessible, and customizable components built on top of Radix UI and Tailwind CSS. Allows for rapid UI development.
*   **Underlying UI Library:** [React](https://react.dev/)
    *   **Reasoning:** Next.js is a React framework, and shadcn/ui components are React components.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    *   **Reasoning:** A dependency of shadcn/ui and a utility-first CSS framework that allows for rapid styling directly in the markup. Highly customizable.
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
    *   **Reasoning:** Recommended for Next.js projects to add static typing, improving code quality, maintainability, and reducing runtime errors.

## Development Tools

*   **Package Manager:** (To be decided/User Preference - common choices listed below)
    *   [npm](https://www.npmjs.com/) (comes with Node.js)
    *   [yarn](https://yarnpkg.com/)
    *   [pnpm](https://pnpm.io/) (fast, disk space efficient)
    *   **Reasoning:** For managing project dependencies.
*   **Version Control:** [Git](https://git-scm.com/)
    *   **Reasoning:** Essential for tracking changes, collaboration (if applicable), and managing different versions of the codebase. Hosted on platforms like GitHub, GitLab, or Bitbucket.
*   **Linting:** [ESLint](https://eslint.org/)
    *   **Reasoning:** To identify and fix problems in JavaScript/TypeScript code, ensuring code quality and consistency.
*   **Formatting:** [Prettier](https://prettier.io/)
    *   **Reasoning:** An opinionated code formatter that enforces a consistent code style across the project.
*   **Form Handling (for Contact Page):**
    *   [React Hook Form](https://react-hook-form.com/) (Recommended with shadcn/ui)
    *   **Reasoning:** Efficient, flexible, and extensible forms with easy-to-use validation. Integrates well with UI component libraries like shadcn/ui.
    *   _Alternatively, for very simple forms, Next.js API routes with basic state management could be used._

## Deployment

*   **Hosting:** Self-hosted on the client's own server.
*   **Considerations for Self-Hosting:**
    *   **Node.js Runtime:** Required to run the Next.js application.
    *   **Process Manager:** (e.g., [PM2](https://pm2.keymetrics.io/)) To keep the Next.js application running reliably in production.
    *   **Web Server (Reverse Proxy):** (e.g., [Nginx](https://www.nginx.com/), [Apache](https://httpd.apache.org/)) Often used in front of a Node.js application to handle SSL termination, caching, load balancing (if needed), and serving static assets.
    *   **Containerization (Optional but Recommended):** [Docker](https://www.docker.com/)
        *   **Reasoning:** To package the application and its dependencies into a portable container, ensuring consistency across different environments and simplifying deployment.
    *   **CI/CD (Optional):** Tools like Jenkins, GitLab CI, GitHub Actions could be used to automate the build and deployment process.

## Other Considerations

*   **Accessibility (a11y):** While shadcn/ui components are designed with accessibility in mind, ongoing attention will be paid to ensure the website is usable by people with disabilities by following WCAG guidelines.
*   **Performance:** Next.js offers features like image optimization and code splitting. We will leverage these to ensure fast load times.
*   **Security:** Standard security best practices for web applications will be followed, especially for the contact form and any server-side logic. 