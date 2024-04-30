import { createApp, registerElement } from "nativescript-vue";
import Home from "./components/Home.vue";
import { BlurView, CornerView } from "./BlurView.android";

registerElement("CornerView", () => CornerView);
registerElement("BlurView", () => BlurView);

createApp(Home).start();
