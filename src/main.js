import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/fr";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assurez-vous que TailwindCSS est importé
import "./app.css";

import App from "./App.vue";

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
});

app.mount("#q-app");
