import mongoose, { HydratedDocument, Model } from "mongoose";

export class BaseService<T> {
  constructor(protected model: Model<T>) {}

  async create(data: HydratedDocument<T>): Promise<HydratedDocument<T>> {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: any): Promise<HydratedDocument<T> | null> {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<{ message: string }> {
    try {
      await this.model.findByIdAndDelete(id);
      return {
        message: "Deleted Successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(
    data: HydratedDocument<T>,
  ): Promise<{ data: HydratedDocument<T>[]; total: number }> {
    try {
      const response = await this.model.find();
      return {
        data: response,
        total: response.length,
      };
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<HydratedDocument<T> | null> {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
