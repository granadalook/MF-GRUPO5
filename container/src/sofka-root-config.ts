import { registerApplication, start } from "single-spa";
import './css/styles.css'

registerApplication({
  name: "@sofka/mf-react",
  app: () => System.import("@sofka/mf-react"),
  activeWhen: ["/react"],
});
registerApplication({
  name: "mf-angular",
  app: () => System.import("mf-angular"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
