"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("./Service");
const service = new Service_1.Service();
(async () => {
    await service.ConnectDB();
    await service.start();
})();
//# sourceMappingURL=index.js.map