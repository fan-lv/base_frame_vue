/**
 * 文件创建的时候，如果当前的菜单下面还有子菜单，需要在该文件夹下面新建一个 index.vue 的文件，用来跳转路由
 * 菜单命名的格式如下
 */
export const menus = [
    {
        key: "menu1",
        label: "一级菜单1",
        icon: "",
    },
    {
        key: "menu2",
        label: "一级菜单2",
        icon: "",
    },
    {
        key: "menu3",
        label: "一级菜单3",
        icon: "",
        children: [
            {
                key: "menu3_1",
                label: "一级菜单3_1",
                icon: "",
                children: [
                    {
                        key: "menu3_1_1",
                        label: "一级菜单3_1_1",
                        icon: "",
                    },
                ],
            },
            {
                key: "menu3_2",
                label: "一级菜单3_2",
                icon: "",
            },
        ],
    },
    {
        key: "menu4",
        label: "未开发页面演示",
        icon: "",
    },
];
