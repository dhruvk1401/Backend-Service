import { HydratedDocument, Model } from "mongoose";
export declare class BaseService<T> {
    protected model: Model<T>;
    constructor(model: Model<T>);
    create(data: HydratedDocument<T>): Promise<HydratedDocument<T>>;
    update(id: string, data: any): Promise<HydratedDocument<T> | null>;
    delete(id: string): Promise<{
        message: string;
    }>;
    getAll(data: HydratedDocument<T>): Promise<{
        data: HydratedDocument<T>[];
        total: number;
    }>;
    getById(id: string): Promise<HydratedDocument<T> | null>;
}
//# sourceMappingURL=base.service.d.ts.map