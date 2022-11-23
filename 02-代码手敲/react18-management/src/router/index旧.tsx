/**
 * @Author liming
 * @Date 2022/11/23 16:06
 **/
//旧的写法：组件形式的写法
import App from '@/App'
import Home from '@/views/Home'
import About from '@/views/About'

import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

//两种路由模式的组件：BrowserRouter(history模式)和HashRouter(hash模式)

// const baseRouter = ()=>{
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App/>}>
//                     <Route path="/home" element={<Home/>}></Route>
//                     <Route path="/about" element={<About/>}></Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }
//以上写法可以简写为：(中间没有逻辑，所以不用写return)
const baseRouter = () => (
    //注意：箭头右边是小括号，不是大括号
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to="home"/>}></Route>
                {/*当访问/的时候，重定向到/home路径上去*/}
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
