import { VerticalActivityCard } from "./components/vertical-activity-card";

import Koa from "koa";
import Router from "@koa/router";
import { getActivityCardV2 } from "./data";
import { asyncStorage } from "./storage";
import { Store } from "./types";

const app = new Koa();
const router = new Router();

router.get("/", (context) => {
  const random = Math.floor(Math.random() * 200000) + 200000;
  const store: Store = { context: { visitorId: `user-${random}` } };

  // run the template in asyncStorage so that the hooks can access the context
  asyncStorage.run(store, () => {
    context.body = <VerticalActivityCard activityCardBlock={getActivityCardV2()} />;
  });
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
