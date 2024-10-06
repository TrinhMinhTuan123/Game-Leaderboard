# Game-Leaderboard

Music game, through playing the game you will accumulate score and be evaluated on the leaderboard.

## Project Setup

### Requirements

- Node.js >= 18
- TypeScript >= 5.1
- MySQL 8

### Getting Started

#### 1. Running Local Server

To run the local server, follow these steps:

1. **Install Redis and MySQL using Docker (optional):**

   ```bash
   npm run docker:mysql
   npm run docker:redis
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.sample .env
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run start:dev
   ```

#### 2. Running Source with Docker

To run the application using Docker, execute the following command:

1. **Set up environment variables:**

   ```bash
   cp .env.docker.sample .env
   ```

2. **Docker compose:**

   ```bash
   docker compose up -d
   ```

#### APIs postman document

[API Document URL](https://www.postman.com/dark-space-8177-1/workspace/game-learderboard/collection/3867591-1496b50b-99ee-484e-af4e-4def8d896cac?action=share&creator=3867591&active-environment=3867591-cb84c7b4-31b3-4509-bb65-116b292d9700)
