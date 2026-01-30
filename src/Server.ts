import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", (message: string) => {
    // Parse the message as a string and process it
    console.log(`Received message: ${message}`);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`Server received: ${message}`);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});
