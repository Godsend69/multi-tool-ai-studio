```markdown
# multi-tool-ai-studio — Backend (scaffold)

Quick start (local, docker):
1. cp .env.example .env
2. docker-compose up --build
3. # in another shell: docker-compose exec api npm run prisma:migrate
4. Visit http://localhost:4000/health

Prisma:
- prisma schema: prisma/schema.prisma
- run migrations: npm run prisma:migrate

Dev:
- npm run dev

Hosting recommendation (free/easy):
- Railway (free tier) or Render free plan — I can add deployment instructions and infra files.

This scaffold includes:
- Express + TypeScript
- Prisma + Postgres (docker-compose)
- Socket.io basic hooks
- CI workflow
```