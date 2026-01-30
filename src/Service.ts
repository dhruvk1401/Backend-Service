import express, { Express } from "express";
import mongoose from "mongoose";
import router from "./routes";

export class Service {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/test", router);
  }

  public async ConnectDB(): Promise<void> {
    try {
      const URL = process.env.MONGOURL || "mongodb://localhost:27017/test";
      await mongoose.connect(URL);
      console.log("Database Connected");
    } catch (error) {
      throw error;
    }
  }

  public start(): void {
    const port = process.env.PORT || "3000";
    try {
      this.app.listen(port, () => {
        console.log("server is listening at port 3000");
      });
    } catch (error) {
      throw error;
    }
  }
}
