"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const node_console_1 = require("node:console");
class RedisClient {
    static instance;
    connected = false;
    client;
    constructor() {
        this.client = new ioredis_1.default({
            host: "localhost",
            port: 6379,
        });
        this.client.on("connect", () => {
            console.log("Redis Client Connected");
        });
        this.client.on("error", () => {
            console.log(node_console_1.error);
            console.log("Unable To connect to Redis Client");
        });
    }
    getInstance() {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient();
        }
    }
}
exports.RedisClient = RedisClient;
//# sourceMappingURL=RedisClient.js.map