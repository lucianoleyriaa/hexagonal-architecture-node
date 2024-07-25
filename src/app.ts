import express from 'express';
import { envs } from './config/envs';
import { MongoDB } from './database';
import { TaskRoutes } from './tasks/infrastructure/adapters/http/routes/taskRoutes';

interface Options {
  port: number
}

export class Server {

  private port: number;

  constructor( options: Options ) {
    this.port = options.port;
  }

  public async start() {
    await MongoDB.connect({connectionUrl: envs.DATABASE_URL});

    const app = express();

    app.use(express.json());

    app.use('/api/tasks', TaskRoutes.routes);

    app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    })

  }

}

async function boostrap() {
  const server = new Server({
    port: envs.PORT
  });

  await server.start();
}

boostrap();