/**
 * @Author liming
 * @Date 2022/11/23 16:06
 **/
//新的写法：对象形式的写法
import App from '@/App'
import Home from '@/views/Home'
import About from '@/views/About'
import {Navigate} from 'react-router-dom'
//Navigate重定向组件
const routes = [
    {
        path:'/',
        element: <Navigate to="/home"/>
    },

    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
]

export default routes
