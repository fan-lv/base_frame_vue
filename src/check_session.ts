import {getRouter} from "@/router";
import {menus as AllMenus} from "@/menus";

/**
 * menus 菜单
 * breadCrumb todo 面包屑
 */
interface InterfaceMenus {
    menus: any[];
    breadCrumb: any[];
}

export const sessionMenus: InterfaceMenus = {
    menus: [],
    breadCrumb: [],
};

// 过滤是否有权限访问菜单
// const dealMenu = (menus: any[]) => {
// };

export const checkSession = () => {
    return new Promise((resolve, reject) => {
        /**
         * todo 此处写菜单权限过滤的代码，假设 menus 为过滤后的数组
         */

        const menus = AllMenus;

        sessionMenus.menus = menus;
        const router = getRouter(menus);
        resolve(router);
    });
};
