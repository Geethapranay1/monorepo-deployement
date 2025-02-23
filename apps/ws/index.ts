import { client } from "@repo/db/client";

Bun.serve({
    port: 8080,
    fetch(req, serve) {
        if(serve.upgrade(req)) {
            return
        }
        return new Response("Upgrade failed", {status: 500})

    },
    websocket: {
        message(ws, message) {
            client.user.create({
                data: {
                    username: Math.random().toString(),
                    password: Math.random().toString()
                }
            })

            ws.send(message)
        }
    }
})