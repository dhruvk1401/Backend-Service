import { Request, Response } from "express";
import { BaseService } from "../services/base.service";
export declare class BaseController<T> {
    protected service: BaseService<T>;
    constructor(service: BaseService<T>);
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
    delete: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
}
//# sourceMappingURL=base.controller.d.ts.map