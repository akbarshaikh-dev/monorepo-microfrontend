# Turborepo starter

This is an Turborepo Monorepo 

Shared config and design system are under packages
and all the customer facing application is in /apps folder


website:dev: - will use port 3000
landing-pages:dev: - will use port 3001
gravity-design:dev: - will use port 3003


# Setup

-   pnpm install  //from root - this will install all the dependencies for all the applications within the workspace
- pnpm run dev // this will run all the app where dev script is defined in package.json.