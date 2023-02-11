import type { AppRouter } from '../../../../server/src/trpc/trpc.router'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export function trpc() {
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
      }),
    ],
  });
  return client
}
