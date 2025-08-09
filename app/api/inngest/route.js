import { inngest } from "@/lib/Inngest/client";
import { helloWorld } from "@/lib/Inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld
  ],
});