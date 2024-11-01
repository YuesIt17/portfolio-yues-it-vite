import { setupWorker } from "msw/browser";

import { http, HttpResponse } from "msw";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  http.get("/resource", () => HttpResponse.json({ text: "text from vite app" }))
);
