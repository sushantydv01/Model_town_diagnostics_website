# Model Town Diagnostics

## Project Overview
Model Town Diagnostics is a pathology collection centre web application designed to support a test catalogue, packages, appointment booking, home collection, online payments, and dashboards for both patients and lab technicians.

## Architecture Overview
This is a modern, modular Monorepo containing a `frontend` and `backend` directory. 
- **Frontend**: Built with React 19, Vite, Tailwind CSS, shadcn/ui, TanStack Query, and React Router. The frontend leverages a feature-based architecture.
- **Backend**: Built with Node.js, Express, TypeScript, and MongoDB. The backend strictly separates concerns (routes, controllers, services, repositories).

## Folder Philosophy
### Frontend (`frontend/src/`)
- `features/`: The core of the application. Organized by domain (e.g., `auth`, `booking`, `tests`). Each feature owns its own `components`, `hooks`, `services`, `types`, etc.
- `pages/`: Page-level components composed from feature modules. Page-specific components live alongside the page in a local `components/` folder.
- `components/common/`: Truly reusable UI components (e.g., Buttons, Inputs, Error Boundaries, Navbar).
- `config/`: Application configuration and environment variable wrappers.
- `providers/`: Context and external library providers (e.g., `QueryProvider`, `ThemeProvider`).
- `schemas/`: Zod validation schemas for forms and API responses.
- `design-system/`: Global design tokens, themes, animations, and icons.

### Backend (`backend/src/`)
- `routes/`: API endpoint definitions organized by role (`public`, `patient`, `technician`).
- `controllers/`: Request handling and response formatting.
- `services/`: Core business logic.
- `repositories/`: Database interaction and query logic.
- `database/`: Database connection logic.
- `utils/`: Reusable utilities like the custom `logger`.

## Naming Conventions
- **Folders/Components**: PascalCase (e.g., `TestCard`, `Dashboard`).
- **Files/Hooks/Utils**: camelCase (e.g., `useAuth.ts`, `api.ts`, `logger.ts`).
- **Constants/Tokens**: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`).

## Development Workflow
We enforce code quality using `husky` and `lint-staged`. Before every commit, modified files are automatically checked by ESLint and Prettier. Failing commits are rejected.

### Setup Instructions
1. Clone the repository.
2. Install dependencies at the root, frontend, and backend.
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Copy `.env.example` to `.env` in both `frontend` and `backend` directories.

### Development Commands
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd backend
npm run dev
```

## Deployment Strategy
- **Frontend**: Deployed to **Netlify** via automated build pipelines.
- **Backend**: Deployed to **Render** via automated build pipelines.
- **Database**: Hosted on **MongoDB Atlas** (Free Tier).
- Deployments rely heavily on environment variables initialized in the hosting environments.

## Project Roadmap
1. **Milestone 0**: Project Foundation & Architecture Freeze (Current).
2. **Milestone 1**: Core UI Components & Design System.
3. **Milestone 2**: Public Pages & Mock Data.
4. **Milestone 3**: Backend Database Integration & Auth.
5. **Milestone 4**: Patient Dashboard & Booking Flow.
6. **Milestone 5**: Technician Dashboard & Management.

## Contribution Guidelines
1. Do not introduce new libraries without consensus.
2. Follow the strict folder philosophy: no feature-specific logic in `common/`.
3. Ensure all local tests and linting (`npm run build`, `npm run lint`) pass before pushing.
4. Keep the application deployment-friendly. No local-only assumptions.
