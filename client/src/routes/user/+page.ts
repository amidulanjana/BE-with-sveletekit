import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const ssr = false;

export const load = (async ({ fetch }) => {
  // try {
  //   const res = await fetch('http://localhost:3000/api/users')
  //   const item = await res.json()
  //   return { item }
  // }
  // catch (err) {
  //   throw error(404, {
  //     message: 'not found'
  //   })
  // }



}) satisfies PageLoad;