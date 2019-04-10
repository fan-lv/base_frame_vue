import Vue from "vue";
import Router from "vue-router";

// 未开发的页面
import notFind from "@/frame/not_find/not_find.vue";

Vue.use(Router);

export const routes: any[] = [];

const viewContext = require.context("./views", true, /\.vue$/);

const cache: { [key: string]: object } = {};

viewContext.keys().forEach((key) => cache[key] = viewContext(key).default);

interface RouterObj {
    path: string;
    name: string;
    component?: object;

    [propName: string]: any;
}

interface Menu {
    key: string;
    label: string;
    icon?: string;

    [propName: string]: any;
}

const menu2router = (menu: Menu, parent: RouterObj, index: number, thisRoutes: any[]) => {
    let isFind = false;
    const route: RouterObj = {
        path: parent.path + "/" + menu.key,
        name: menu.label,
    };

    // 菜单下的子页面（如：新增，编辑页面）
    if (menu.sub && menu.sub.length > 0) {
        for (let i = 0, j = menu.sub.length; i < j; i++) {
            const subRoutePath = route.path + "/" + (menu.sub[i].key || "index") + ".vue";
            for (const key of Object.keys(cache)) {
                if (key.indexOf(subRoutePath) !== -1) {
                    thisRoutes[index] = {
                        path: route.path + "/" + (menu.sub[i].key || "index"),
                        name: menu.sub[i].label,
                        component: cache[key],
                    };
                }
            }
        }
    }

    // 有子菜单
    if (menu.children && menu.children.length > 0) {
        const routeFilePath = route.path + "/index.vue";
        let fileComponent = null;
        for (const key of Object.keys(cache)) {
            if (key.indexOf(routeFilePath) !== -1) {
                fileComponent = cache[key];
                break;
            }
        }
        thisRoutes[index] = {
            path: "/" + menu.key,
            name: menu.label,
            component: fileComponent,
            children: [],
        };
        for (let i = 0, j = menu.children.length; i < j; i++) {
            menu2router(menu.children[i], route, i, thisRoutes[index].children);
        }
    }

    // 最后一级菜单
    const routePath = route.path + "/" + (menu.key || "index") + ".vue";
    for (const key of Object.keys(cache)) {
        if (key.indexOf(routePath) !== -1) {
            isFind = true;
            const obj: RouterObj = {
                path: route.path,
                name: route.name,
                component: cache[key],
            };
            thisRoutes.push(obj);
            break;
        }
    }

    // 未找到页面或仍在开发中
    if (!isFind) {
        thisRoutes.push({
            path: route.path,
            name: route.name,
            component: notFind,
        });
    }
};

export const getRouter = (menusArr: any[]) => {
    menusArr.forEach((menu: Menu, index: number) => {
        menu2router(menu, {path: "", name: ""}, index, routes);
    });

    routes.push({
        path: "/",
        redirect: routes[0].path,
    });

    return new Router({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
    });
};
