/**
 * @Author liming
 * @Date 2022/11/23 16:06
 **/

//路由懒加载
import React,{lazy} from 'react'

//新的写法：对象形式的写法
import App from '@/App'
import Home from '@/views/Home'   //Home没有必要懒加载，进来就看到的是Home
// import About from '@/views/About'
// import User from '@/views/User'

const About = lazy(()=>import("@/views/About"))
const User = lazy(()=>import("@/views/User"))

/**
 * 报错：A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
 * To fix, updates that suspend should be wrapped with startTransition.
 * 懒加载的模式，需要我们给它添加一个Loading的提示加载组件
 */
import {Navigate} from 'react-router-dom'
import Page1 from "@/views/Page1";
import Page2 from "@/views/Page2";
//Navigate重定向组件

const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
        {/*这里要加大括号，因为这个是活的*/}
    </React.Suspense>
)
const routes = [
    //嵌套路由 开始------------------------
    {
        path:'/',
        element: <Navigate to="/page1"/>
    },
    {
        path:'/',
        element: <Home/>,
        children: [
            {
                path:'/page1',
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:'/page2',
                element:withLoadingComponent(<Page2/>)
            },
        ]
    }
    //嵌套路由 结束------------------------

    //没有子路由的写法
    // {
    //     path:'/home',
    //     element:<Home/>
    // },
    // {
    //     path:'/about',
    //     // element:<React.Suspense fallback={<div>Loading...</div>}>
    //     //     <About/>
    //     // </React.Suspense>
    //
    //     //优化写法：
    //     element:withLoadingComponent(<About/>)
    // },
    // {
    //     path:'/user',
    //     // element:<React.Suspense fallback={<div>Loading...</div>}>
    //     //     <User/>
    //     // </React.Suspense>
    //     element:withLoadingComponent(<User/>)
    // },
]

export default routes
