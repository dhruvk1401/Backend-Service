"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    service;
    constructor(service) {
        this.service = service;
        this.service = service;
    }
    create = async (req, res) => {
        try {
            const response = await this.service.create(req.body);
            res.send(response);
        }
        catch (error) {
            res.send(error.message || 500);
        }
    };
    update = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.service.update(id, req.body);
            res.send(response);
        }
        catch (error) {
            res.send(error.message || 500);
        }
    };
    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.service.delete(id);
            res.send(response);
        }
        catch (error) {
            res.send(error.message || 500);
        }
    };
    getAll = async (req, res) => {
        try {
            const response = await this.service.getAll(req.body);
            res.send(response);
        }
        catch (error) {
            res.send(error.message || 500);
        }
    };
    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.service.getById(id);
            res.send(response);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map