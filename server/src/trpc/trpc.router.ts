import { INestApplication, Injectable } from '@nestjs/common';
import { UserRouter } from './router/user.router';
import { InitTrpc } from './trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { PetRouter } from './router/pet.router';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: InitTrpc,
    private readonly users: UserRouter,
    private readonly pets: PetRouter,
  ) { }

  appRouter = this.trpc.mergeRouters(this.users.router, this.pets.router);

  applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];