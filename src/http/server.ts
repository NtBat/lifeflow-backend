import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { createGoal } from "../functions/create-goal";
import z from "zod";
import { GetWeekPendingGoals } from "../functions/get-week-pending-goals";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/pending-goals", async () => {
  const { pendingGoals } = await GetWeekPendingGoals();

  return { pendingGoals };
});

app.post(
  "/goals",
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number(),
      }),
    },
  },
  async (request) => {
    const { title, desiredWeeklyFrequency } = request.body;
    await createGoal({
      title: title,
      desiredWeeklyFrequency: desiredWeeklyFrequency,
    });
  }
);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333");
  });
