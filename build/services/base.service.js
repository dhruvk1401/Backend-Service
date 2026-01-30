"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {
                new: true,
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return {
                message: "Deleted Successfully",
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getAll(data) {
        try {
            const response = await this.model.find();
            return {
                data: response,
                total: response.length,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map