/**
 * 文件创建的时候，如果当前的菜单下面还有子菜单，需要在该文件夹下面新建一个 index.vue 的文件，用来跳转路由
 * 如果是该页面下的新增编辑页面，直接同级创建文件就行
 * 菜单命名的格式如下
 */
export const menus = [
    {
        key: "control",
        label: "控件",
        subLabel: "控件列表",
        icon: "heat-map",
        children: [
            {
                key: "button",
                label: "按钮",
                icon: "",
            },
            {
                key: "input",
                label: "输入框",
                icon: "",
            },
            {
                key: "select",
                label: "下拉框",
                icon: "",
            },
            {
                key: "date_picker",
                label: "日期选择",
                icon: "",
            },
            {
                key: "alert",
                label: "提示注释",
                icon: "",
            },
            {
                key: "message",
                label: "全局提示",
                icon: "",
            },
            {
                key: "modal",
                label: "弹窗",
                icon: "",
            },
            {
                key: "pagination",
                label: "分页",
                icon: "",
            },
        ],
    },
    {
        key: "control_combination",
        label: "组件",
        subLabel: "组件列表",
        icon: "appstore",
        children: [
            {
                key: "rich_text",
                label: "富文本",
                icon: "",
            },
            {
                key: "table",
                label: "表格",
                icon: "",
            },
        ],
    },
    {
        key: "menu1",
        label: "菜单1",
        subLabel: "一级菜单1",
        icon: "pie-chart",
    },
    {
        key: "menu2",
        label: "菜单2",
        subLabel: "一级菜单2",
        icon: "pie-chart",
    },
    {
        key: "menu3",
        label: "子菜单",
        subLabel: "一级菜单3",
        icon: "pie-chart",
        children: [
            {
                key: "menu3_1",
                label: "二级菜单3_1",
                icon: "",
                children: [
                    {
                        key: "menu3_1_1",
                        label: "三级菜单3_1_1",
                        icon: "",
                    },
                ],
            },
            {
                key: "menu3_2",
                label: "二级菜单3_2",
                icon: "",
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
        label: "未开发",
        subLabel: "未开发页面",
        icon: "pie-chart",
    },
];
