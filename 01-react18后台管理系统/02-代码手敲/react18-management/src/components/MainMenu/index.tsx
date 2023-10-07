import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";

/**
 * @Author liming
 * @Date 2022/12/20 12:46
 **/

type MenuItem = Required<MenuProps>['items'][number];
/**
 * 这是 TypeScript 中的类型别名定义。它定义了一个名为 MenuItem 的类型，该类型是一个对象类型，
 * 其中包含一个名为 items 的必需属性，类型为数组。此外，这个数组中的每个元素都是一个对象类型，它是 MenuProps 类型的一个子集。
 *
 * 这意味着，如果你有一个变量 x，它的类型是 MenuItem，那么你可以确定 x 是一个对象，
 * 其中包含一个名为 items 的必需属性，该属性是一个数组，其中包含一些对象。
 * 这些对象都必须包含 MenuProps 中定义的所有属性。
 */
//这是antd官网写的代码：
// //构造了一个个对象，通过函数去限制对象构造
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }
//
// const items: MenuItem[] = [
//     getItem('栏目1', '/page1', <PieChartOutlined />),
//     getItem('栏目2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

//这是我们自己写的更加直观的代码(代码量上去了)
//登录请求到数据之后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined/>,
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined/>,
    },
    {
        label: '栏目3',
        key: '/page3',
        icon: <UserOutlined/>,
        children:[
            {
                label: '栏目3-1',
                key: '/page3/page301',
            },
            {
                label: '栏目3-2',
                key: '/page3/page302',
            },
        ]
    },
    {
        label: '栏目4',
        key: '/page4',
        icon: <TeamOutlined/>,
        children:[
            {
                label: '栏目4-1',
                key: '/page4/page401',
            },
            {
                label: '栏目4-2',
                key: '/page4/page402',
            },
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined/>,
    },
]
const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation()
    console.log('当前路由',currentRoute.pathname)
    const menuClick = (e: { key: string }) => {
        // console.log('点击来了菜单', e.key)
        //要求：点击后跳转到对应的路由  编程式导航 利用到一个hook
        navigateTo(e.key)
    }

    //拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比,如果找到了相等了,
    //就要他上一级的key,这个key给到openKeys数组的元素，作为初始值
    let firstOpenKey:string = "";

    function findKey(obj:{key:string}){
        return obj.key === currentRoute.pathname;
    }
    //在这里进行对比 find
    //对比的是多个children
    for(let i = 0; i < items.length; i++){
        // @ts-ignore
        if(items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)){
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    //items[]['children'].find(findKey)  //返回值为一个对象，转布尔值就是true
    //设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            //defaultSelectedKeys表示当前样式所在选中项的key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            //items:菜单项数据
            items={items}
            onClick={menuClick}
            //某项菜单展开和回收的事件
            onOpenChange={handleOpenChange}
            //当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp;
