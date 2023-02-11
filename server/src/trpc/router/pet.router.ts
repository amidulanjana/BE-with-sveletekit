import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { InitTrpc } from '../trpc.service';

@Injectable()
export class PetRouter {
  constructor(private readonly trpc: InitTrpc) { }

  getPet = this.trpc.procedure
    .input(z.object({ text: z.string() }).optional())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}!`,
      };
    });

  router = this.trpc.router({
    getPet: this.getPet,
  });
}