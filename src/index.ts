import { Service } from "./Service";

const service = new Service();

(async () => {
  await service.ConnectDB();
  await service.start();
})();
