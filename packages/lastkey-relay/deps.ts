import limiterFactory from "https://cdn.skypack.dev/lambda-rate-limiter";
import { serve } from "https://deno.land/std@0.183.0/http/server.ts";

const rateLimit = limiterFactory({
	interval: 60000, // Our rate-limit interval, 1 minute
	uniqueTokenPerInterval: 1500,
});

const headersOptions: Record<string, string> = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Max-Age": "86400",
};
const headerDefault = { ...headersOptions, "content-type": "text/plain" };

export { serve, rateLimit, headerDefault, headersOptions };
