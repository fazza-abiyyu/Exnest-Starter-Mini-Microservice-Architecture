## Exnest Starter

Minimal Express + TypeScript + Prisma starter with a clean, modular layout.

Note: Express with a Nest-like architecture; this is not NestJS.

### Stack
- TypeScript, Express v5, Prisma ORM, dotenv
- Dev: ts-node, nodemon

### Requirements
- Node.js 18+
- A Prisma-supported database

### Project Structure
```
src/
  app.ts
  controllers/
  services/
  dto/
  routes/
  endpoints/
  middlewares/
  db/
  utils/
prisma/
  schema.prisma
example.env
```

### Quick Start
```bash
npm install
cp example.env .env
npx prisma generate
npm run dev
```

Using Yarn:
```bash
yarn
cp example.env .env
yarn prisma generate
yarn dev
```

Using Bun:
```bash
bun install
cp example.env .env
bunx prisma generate
bun run dev
```

### Env
- PORT
- DATABASE_URL

### Scripts
- dev: start development server with nodemon

### Prisma
```bash
npx prisma migrate dev --name init
npx prisma studio
```

### Example Endpoint
- GET /health


