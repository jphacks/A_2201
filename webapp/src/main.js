import { createApp } from "vue";
import router from "./router/index.ts";
import store from "./store/index.ts";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCheck)

// import Step progress
import StepProgress from 'vue-step-progress';

import 'vue-step-progress/dist/main.css';

createApp(App).use(router).use(store).component('step-progress', StepProgress).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
