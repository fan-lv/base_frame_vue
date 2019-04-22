import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import {checkSession} from "@/check_session";
import "./highlight";
import "@/frame/css/base.styl";
import "@/frame/css/control.styl";
import apiConfig from "@/apiConfig";
import AxiosConfig from "@/axios_config";

Vue.use(Antd);
Vue.prototype.apiConfig = apiConfig;
Vue.prototype.$axios = new AxiosConfig();

checkSession().then((router: any) => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app");
});
