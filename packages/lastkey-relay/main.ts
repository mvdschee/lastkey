import { serve, headersOptions, headerDefault, rateLimit } from "./deps.ts";
import {
	ConnInfo,
	Handler,
} from "https://deno.land/std@0.183.0/http/server.ts";

const handler = (req: Request): Response => {
	const { pathname, searchParams } = new URL(req.url);

	if (pathname.startsWith("/send")) {
		const data = searchParams.get("data");
		const id = searchParams.get("id") || "anon";

		const channel = new BroadcastChannel(id);

		channel.postMessage(data);
		channel.close();

		return new Response("OK", { headers: headerDefault });
	}

	if (pathname.startsWith("/listen")) {
		const id = searchParams.get("id") || "anon";
		const channel = new BroadcastChannel(id);

		const stream = new ReadableStream({
			start: (controller) => {
				channel.onmessage = (e) => {
					const body = `data: ${JSON.stringify(e.data)}\n\n`;
					controller.enqueue(body);
				};
			},
			cancel() {
				channel.close();
			},
		});

		return new Response(stream.pipeThrough(new TextEncoderStream()), {
			headers: { ...headersOptions, "content-type": "text/event-stream" },
		});
	}

	return new Response("not found", { headers: headerDefault, status: 404 });
};

const allowHandler =
	(fn: Handler) => async (request: Request, connInfo: ConnInfo) => {
		const { method } = request;
		const { hostname } = connInfo.remoteAddr as Deno.NetAddr;

		if (method === "OPTIONS") {
			return new Response("OK", {
				headers: headerDefault,
			});
		}

		if (method !== "GET") {
			return new Response("Bad request", {
				headers: headerDefault,
				status: 400,
			});
		}

		try {
			await rateLimit.check(100, hostname);
		} catch (_e) {
			return new Response("Too Many Requests", {
				headers: headerDefault,
				status: 429,
			});
		}

		return await fn(request, connInfo);
	};

serve(allowHandler(handler), { port: 8080 });
