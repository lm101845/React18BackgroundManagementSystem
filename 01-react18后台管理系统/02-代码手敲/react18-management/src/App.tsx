import {useState} from 'react'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'
import {Button} from "antd";

import {CaretDownOutlined} from "@ant-design/icons";
// import 'antd/dist/antd.css'  //or 'antd/dist/antd.less'
//这种属于全部组件样式都引入了，不好
//我们使用一个vite-plugin-style-import让我们实现动态引入
import {useRoutes,Outlet,Link} from 'react-router-dom'
import router from '@/router'
//这个router是一个数组
function App() {
    const [count, setCount] = useState(0)
    const outlet = useRoutes(router)
    return (
        <div className="App">
            {/*<Comp1/>*/}
            {/*<Comp2/>*/}
            {/*<Button type="primary">按钮</Button>*/}
            {/*<CaretDownOutlined style={{fontSize: '40px', color: 'red'}}/>*/}
            {/*占位符组件，类似于窗口,用来展示组件的,有点像vue中的router-view*/}

            {/*<Link to="/home">Home</Link>*/}
            {/*<Link to="/about">About</Link>*/}
            {/*<Link to="/user">User</Link>*/}
            {/*使用标签进行跳转*/}

            {/*<Outlet></Outlet>*/}
            {/*第2种写法用不到Outlet,用的是useRoutes*/}
            {outlet}
        </div>
    )
}

export default App
