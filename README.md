# Data-Swarm: Elastic AI Data Infrastructure

**The enterprise-grade alternative to manual data contracting.**

Data-Swarm is an autonomous orchestration engine that deploys specialized AI agents into secure, ephemeral sandboxes to solve complex data analysis tasks at scale.

<div align="center">

[![Watch the Demo](https://img.youtube.com/vi/HyYXURkaWA8/maxresdefault.jpg)](https://youtu.be/HyYXURkaWA8)

**[Watch the Intro Video](https://youtu.be/HyYXURkaWA8)**

</div>

---

## B2B Value Proposition

| Problem | Data-Swarm Solution |
|---------|-------------------|
| Weeks of manual data cleaning | Parallelized into minutes via autonomous agent swarms |
| Opaque contractor work with no visibility | Every insight derived from generated Python code, not LLM "guesses" |
| Data shared with third-party contractors | Analysis occurs in isolated [E2B](https://e2b.dev) Firecracker micro-VMs |
| No audit trail for compliance | Full execution logs streamed in real-time, every operation timestamped |
| Per-hour billing, unpredictable costs | Flat-rate, transparent execution with sandbox resource metrics |

**Built for data teams, compliance officers, and engineering leaders** who need fast, secure, auditable analysis without the overhead of managing contractors or building internal tooling.

---

## The "Trust Stack"

Every layer of Data-Swarm is engineered for enterprise compliance, isolation, and auditability.

### Compute: Firecracker Micro-VMs (via E2B)

Every analysis task runs inside an isolated E2B Sandbox environment powered by Firecracker micro-VMs. Zero data leakage between workloads. Memory-safe execution boundaries with automatic teardown.

- Isolated compute per task with no shared state
- Automatic sandbox destruction after execution completes
- Zero-persistence data handling: data is wiped instantly upon task completion
- API key authentication with zero server-side credential storage

### Orchestration: Multi-Agent Supervisor/Worker Pattern

A Supervisor agent receives your dataset and decomposes the analysis into optimized worker steps. Each worker executes in its own sandbox:

- **Worker 1: Data Validation & Cleaning** - Null detection, deduplication, schema validation
- **Worker 2: Statistical Analysis & Anomaly Detection** - Z-score analysis, correlation matrices, outlier detection
- **Worker 3: Report Generation & Summarization** - Aggregation, confidence scoring, executive summary

### Framework

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Tailwind CSS, Framer Motion |
| UI Components | Radix UI / shadcn-ui primitives |
| Routing | Wouter (lightweight client-side routing) |
| State | TanStack React Query |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL with Drizzle ORM |
| Validation | Zod (shared schemas across client and server) |
| Real-time | Server-Sent Events (SSE) for live log streaming |
| Sandbox | E2B Sandboxes (Firecracker micro-VMs) |

### Security: Zero-Persistence Data Handling

Every line of Python code executed inside the sandbox is streamed to the client in real-time via SSE. Complete reproducibility for:

- SOC 2 Type II compliance
- Regulatory review and data governance
- Debugging and root cause analysis
- Client-facing transparency reports

---

## Deployment

### Quick Start

1. Connect your E2B API Key
2. Upload your raw dataset (CSV)
3. Deploy the Swarm
4. Receive a verified, code-backed report with full audit trail

### Developer Setup

```bash
# 1. Ensure PostgreSQL is provisioned with DATABASE_URL set

# 2. Push the database schema
npm run db:push

# 3. Start the development server
npm run dev
```

The application serves:
- **`/`** - Landing page (B2B marketing and conversion)
- **`/deploy`** - Swarm deployment dashboard (CSV upload, live logs)
- **`/dashboard`** - Platform metrics overview
- **`/tasks`** - Analysis task management
- **`/clusters`** - Agent cluster management

---

## Technical Architecture

```
                          +------------------+
                          |   Landing Page   |
                          |   (Marketing)    |
                          +--------+---------+
                                   |
                          +--------v---------+
                          |  Client Dashboard |
                          |  - E2B API Key    |
                          |  - CSV Upload     |
                          |  - Deploy Swarm   |
                          +--------+---------+
                                   |
                            POST /api/swarm/deploy
                                   |
                          +--------v---------+
                          |    Express API    |
                          |  (Node.js + TS)   |
                          +--------+---------+
                                   |
                    +--------------+--------------+
                    |              |               |
            +-------v------+ +----v-------+ +-----v------+
            |  Supervisor  | | PostgreSQL | |   SSE Log  |
            |    Agent     | |  Database  | |  Streaming |
            +-------+------+ +------------+ +------------+
                    |
         +----------+----------+
         |          |          |
   +-----v----+ +--v-------+ +v----------+
   | Worker 1 | | Worker 2 | | Worker 3  |
   | Validate | | Analyze  | | Report    |
   | (E2B VM) | | (E2B VM) | | (E2B VM)  |
   +----------+ +----------+ +-----------+
```

### Project Structure

```
├── client/                  # React frontend
│   └── src/
│       ├── components/      # Layout, StatusBadge, shadcn-ui
│       ├── hooks/           # React Query hooks (tasks, clusters)
│       ├── lib/             # API client, query config
│       └── pages/
│           ├── Landing          # High-conversion B2B page
│           ├── Dashboard        # Platform metrics overview
│           ├── SwarmDashboard   # Deploy swarm + live logs
│           ├── Tasks            # Analysis task management
│           └── Clusters         # Agent cluster management
├── server/                  # Express backend
│   ├── db.ts               # PostgreSQL connection (Drizzle)
│   ├── routes.ts           # API routes + swarm execution engine
│   └── storage.ts          # Database access layer
└── shared/                  # Shared types and API contracts
    ├── schema.ts            # Drizzle tables, Zod schemas, types
    └── routes.ts            # API contract definitions
```

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/clusters` | List all agent clusters |
| `GET` | `/api/clusters/:id` | Get a specific cluster |
| `POST` | `/api/clusters` | Provision a new cluster |
| `GET` | `/api/tasks` | List all analysis tasks |
| `GET` | `/api/tasks/:id` | Get a specific task |
| `POST` | `/api/tasks` | Create a new analysis task |
| `PATCH` | `/api/tasks/:id` | Update task status/results |
| `GET` | `/api/swarm/jobs` | List all swarm deployment jobs |
| `POST` | `/api/swarm/deploy` | Deploy a new swarm (CSV + API key) |
| `GET` | `/api/swarm/jobs/:id/logs` | SSE stream of live sandbox logs |

### Data Flow

1. **User uploads CSV** and provides E2B API key via the Deploy Swarm dashboard
2. **`POST /api/swarm/deploy`** validates the key and CSV, creates a `swarm_job` record, and starts async execution
3. **Supervisor agent** initializes the sandbox, parses the CSV, and decomposes the task into 3 worker steps
4. **Worker agents** execute in E2B sandboxes, each running Python analysis code (pandas, scipy, numpy)
5. **SSE stream** (`/api/swarm/jobs/:id/logs`) delivers real-time log output to the client, color-coded by source
6. **Results** are persisted to PostgreSQL with full audit metadata (row counts, anomalies, confidence scores, sandbox resource metrics)

---

## Design

The interface follows a premium dark-mode enterprise aesthetic inspired by Vercel, Stripe, and Scale AI:

- True black (`#000000`) background with dark grey (`#111111`) card surfaces
- Electric blue (`#0070F3`) accent for interactive elements and agent indicators
- Bright green (`#00E676`) for success states and live code output
- Inter for UI text, Space Mono for technical data, IDs, and log output
- Generous whitespace with consistent spacing rhythm
- Subtle borders (`#333333`) with minimal shadows
- Real-time log streaming with color-coded output (Supervisor blue, Worker white, Code green)

---

*Built for the next generation of data-driven enterprises.*
