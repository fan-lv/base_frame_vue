/**
 * 文件创建的时候，如果当前的菜单下面还有子菜单，需要在该文件夹下面新建一个 index.vue 的文件，用来跳转路由
 * 如果是该页面下的新增编辑页面，直接同级创建文件就行
 * 菜单命名的格式如下
 */
export const menus = [
    {
        key: "menu1",
        label: "一级菜单1",
        icon: "ios-apps",
    },
    {
        key: "menu2",
        label: "一级菜单2",
        icon: "ios-barcode",
    },
    {
        key: "menu3",
        label: "一级菜单3",
        icon: "ios-baseball",
        children: [
            {
                key: "menu3_1",
                label: "二级菜单3_1",
                icon: "ios-boat",
                children: [
                    {
                        key: "menu3_1_1",
                        label: "三级菜单3_1_1",
                        icon: "ios-bookmarks",
                    },
                ],
            },
            {
                key: "menu3_2",
                label: "二级菜单3_2",
                icon: "ios-bulb",
                sub: [
                    {
                        key: "menu3_2_children",
                        label: "二级菜单3_2_children",
                        icon: "",
                    },
                ],
            },
        ],
    },
    {
        key: "menu4",
        label: "未开发页面演示",
        icon: "ios-time",
    },
];
