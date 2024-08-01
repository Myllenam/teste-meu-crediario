
import { httpServer } from "./server";

httpServer.listen(8080, () => {
  console.log("HTTP server listening on port 8080");
});