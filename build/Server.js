"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importStar(require("ws"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("WebSocket server is running");
});
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (message) => {
        // Parse the message as a string and process it
        console.log(`Received message: ${message}`);
        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === ws_1.default.OPEN) {
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
//# sourceMappingURL=Server.js.map