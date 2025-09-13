<div align="center">
  
  <h1>Exnest Starter</h1>
  
  <p>A minimal Express + TypeScript + Prisma starter with microservice architecture and clean, modular layout.</p>
  
  <p><i>Express with a Nest-like architecture; this is not NestJS.</i></p>
</div>


<div align="center" class="framework-icons">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
</div>

## 🚀 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express v5
- **Language**: TypeScript
- **Database**: Prisma ORM
- **Environment**: dotenv
- **Development**: ts-node, nodemon, concurrently

## 📋 Requirements

- Node.js 18+
- A Prisma-supported database (PostgreSQL, MySQL, SQLite, etc.)

## 🏗️ Project Structure

```
src/
├── app.ts                    # Main application (API Gateway)
├── modules/                  # Microservices
│   ├── health/
│   │   ├── app.ts           # Health microservice (Port 4001)
│   │   ├── health.controller.ts
│   │   ├── health.route.ts
│   │   ├── health.service.ts
│   │   └── health.dto.ts
│   └── template/
│       └── app.ts           # Template for new microservices
├── endpoints/               # API Gateway endpoints
├── middlewares/            # Shared middlewares
├── db/                     # Database configuration
└── utils/                  # Utility functions
prisma/
└── schema.prisma          # Database schema
```

## 🚀 Quick Start

### Installation

```bash
# Clone and install dependencies
npm install

# Setup environment
cp example.env .env

# Generate Prisma client
npx prisma generate
```

### Alternative Package Managers

**Using Yarn:**
```bash
yarn
cp example.env .env
yarn prisma generate
```

**Using Bun:**
```bash
bun install
cp example.env .env
bunx prisma generate
```

## 🎯 Running the Application

### 1. Main Application (API Gateway)
```bash
npm run dev
# Runs on http://localhost:3000
# Health endpoint: http://localhost:3000/api/health
```

### 2. Health Microservice (Standalone)
```bash
npm run dev:health
# Runs on http://localhost:4001
# Health endpoint: http://localhost:4001/
```

### 3. All Services Together
```bash
npm run dev:all
# Runs main app + health microservice concurrently
```

## 📝 Available Scripts

- `npm run dev` - Start main application with nodemon
- `npm run dev:health` - Start health microservice only
- `npm run dev:all` - Start all services concurrently
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production build
- `npm run start:health` - Start health microservice from build

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3000
DATABASE_URL="your_database_connection_string"
```

## 🗄️ Database Setup

### Prisma Commands

```bash
# Create and run migrations
npx prisma migrate dev --name init

# Open Prisma Studio (Database GUI)
npx prisma studio

# Reset database
npx prisma migrate reset
```

## 🏢 Microservice Architecture

This project uses a microservice architecture where each module can run independently.

### Benefits

- ✅ **Independent**: Each service can run standalone
- ✅ **Scalable**: Deploy services separately
- ✅ **Testing**: Easy endpoint testing without main app
- ✅ **Development**: Focus on one service at a time
- ✅ **Port Separation**: Each service has its own port

### Port Allocation

- **3000**: Main Application (API Gateway)
- **4001**: Health Microservice
- **4002+**: Additional microservices (as needed)

## 🆕 Creating a New Microservice

1. **Create new module folder** at `src/modules/your-module/`
2. **Copy template** from `src/modules/template/app.ts`
3. **Update configuration**:
   - Change PORT (default: 4002, 4003, etc.)
   - Change service name
   - Add your module router
4. **Add script** to `package.json`:
   ```json
   "dev:your-module": "nodemon -r tsconfig-paths/register src/modules/your-module/app.ts"
   ```

### Example Microservice Structure

```typescript
// src/modules/your-module/app.ts
import express from "express";
import { errorMiddleware } from "../../middlewares/error.middleware";
import yourModuleRouter from "./your-module.route";

const app = express();

app.use(express.json());
app.use("/", yourModuleRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`🚀 Your Module microservice running on http://localhost:${PORT}`);
});
```

## 📊 Example Endpoints

### Main Application
- `GET /api/health` - Health check through API Gateway

### Health Microservice
- `GET /` - Direct health check

## 🧪 Testing

Test individual microservices:

```bash
# Test main application
curl http://localhost:3000/api/health

# Test health microservice directly
curl http://localhost:4001/
```

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.