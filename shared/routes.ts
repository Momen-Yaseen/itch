import { z } from 'zod';
import { insertContactRequestSchema } from './schema';

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactRequestSchema,
      responses: {
        200: z.object({ success: z.boolean() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
