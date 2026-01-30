"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
class Service {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use("/test", routes_1.default);
    }
    async ConnectDB() {
        try {
            const URL = process.env.MONGOURL || "mongodb://localhost:27017/test";
            await mongoose_1.default.connect(URL);
            console.log("Database Connected");
        }
        catch (error) {
            throw error;
        }
    }
    start() {
        const port = process.env.PORT || "3000";
        try {
            this.app.listen(port, () => {
                console.log("server is listening at port 3000");
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map