import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import iview from "iview";
import "iview/dist/styles/iview.css";
import {checkSession} from "@/check_session";

Vue.use(iview);
Vue.config.productionTip = false;

checkSession().then((router: any) => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app");
});
