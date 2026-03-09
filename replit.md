# Data-Swarm

## Overview
A premium B2B SaaS platform that automates data analysis tasks using autonomous agent clusters running in secure E2B Sandboxes (Firecracker micro-VMs).

## Architecture
- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Wouter routing, TanStack React Query
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Real-time**: Server-Sent Events (SSE) for live log streaming
- **Validation**: Zod (shared schemas between frontend and backend)
- **UI Components**: Radix UI / shadcn-ui primitives

## Pages
1. **Landing Page** (`/`) - B2B marketing page with hero, Trust Stack, architecture sections
2. **Dashboard** (`/dashboard`) - Platform overview with metrics (active clusters, running tasks, etc.)
3. **Deploy Swarm** (`/deploy`) - Client dashboard for E2B API key input, CSV upload, swarm deployment with live logs
4. **Analysis Tasks** (`/tasks`) - CRUD for analysis tasks with execution simulation
5. **Agent Clusters** (`/clusters`) - Agent cluster provisioning and management

## Database Tables
- `agent_clusters` - Cluster management (name, status, region, active tasks count)
- `analysis_tasks` - Individual analysis tasks with results (JSONB)
- `swarm_jobs` - Swarm deployment jobs with worker steps and result summaries

## Key Features
- Swarm deployment with Supervisor/Worker pattern (3 worker pipeline)
- Real-time SSE log streaming from sandbox execution
- CSV upload and parsing
- Worker pipeline status tracking
- Past job history
- Color-coded terminal log output

## Design Tokens
- Background: #000000 (true black)
- Surface: #111111 (dark grey)
- Border: #333333 (subtle grey)
- Accent: #0070F3 (electric blue)
- Success: #00E676 (bright green)
- Text Primary: #FFFFFF, Text Secondary: #888888
- Fonts: Inter (UI), Space Mono (technical/monospace)

## API Routes
- GET/POST `/api/clusters` - List/create clusters
- GET `/api/clusters/:id` - Get cluster
- GET/POST `/api/tasks` - List/create tasks
- GET/PATCH `/api/tasks/:id` - Get/update task
- GET `/api/swarm/jobs` - List swarm jobs
- POST `/api/swarm/deploy` - Deploy new swarm
- GET `/api/swarm/jobs/:id/logs` - SSE stream of live sandbox logs
