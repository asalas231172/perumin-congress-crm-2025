# Perumin Congress Contact Manager

A professional contact and meeting management system built for mining industry professionals attending Perumin Congress. This Next.js application provides comprehensive CRM functionality with PostgreSQL database integration.

## Features

- **Contact Management**: Store and organize professional contacts with company affiliations
- **Meeting Scheduling**: Plan and track meetings with participants, topics, and action items
- **Company Profiles**: Maintain detailed company information including projects and key personnel
- **Dashboard Analytics**: Real-time statistics and upcoming meeting overview
- **Professional Mining Theme**: AI-generated mining industry visuals and branding

## Technology Stack

- **Framework**: Next.js 15.5.3 with App Router and Turbopack
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: TailwindCSS v4 with professional mining theme
- **UI Components**: Lucide React icons
- **State Management**: Zustand for client-side state
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel with Vercel Postgres

## Getting Started

### Prerequisites

- Node.js 20+ installed
- PostgreSQL database (or Vercel Postgres for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asalas231172/perumin-congress-crm-2025.git
cd perumin-congress-crm-2025
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your database connection string:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/perumin_db"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fasalas231172%2Fperumin-congress-crm-2025)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Import from GitHub**: Select this repository
3. **Add Vercel Postgres**: Go to Storage tab → Create Database
4. **Environment Variables**: Vercel will automatically set DATABASE_URL from Postgres
5. **Deploy**: Automatic deployment with `prisma generate && next build`

## License

MIT License - Professional mining industry contact management system.