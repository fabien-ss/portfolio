import { createApp } from "vue";
import App from "./App.vue";

import { Weavy } from "@weavy/uikit-web";

const weavy = new Weavy();
weavy.url = "https://3862c696697e49a3a5737d11678d018a.weavy.io";
weavy.tokenFactory = async (refresh) => "wyu_UNzVddNwDcLDnRXxbGyMyOTLCmnYoC2igu0z";

const app = createApp(App);

// Configuration to allow Weavy Web Components when using in-browser compilation.
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("wy-");

app.provide("weavy", weavy);
app.mount("#app");
