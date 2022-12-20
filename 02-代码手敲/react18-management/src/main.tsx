import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
import 'reset-css'
//样式初始化一般放在最前面
//UI框架的样式(放中间)
//全局样式(覆盖掉UI框架)
import '@/assets/styles/global.scss'
//组件的样式(放最后)
//不然的话，才能正确的进行覆盖
import App from './App'
import Router from '@/router'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*<Router/>*/}
    </React.StrictMode>
    /**
     * 在开发环境中，React 会在开启严格模式后进行两次渲染，因为严格模式会对组件进行额外的检查。
     *
     * 严格模式的目的是帮助你发现在渲染期间可能存在的错误和不良实践。例如，严格模式会报告组件中的非纯函数，
     * 以及在渲染期间修改了组件的状态的情况。
     *
     * 为了进行这些检查，React 在开启严格模式后会对组件进行两次渲染。
     * 第一次渲染用于收集信息，第二次渲染用于基于收集到的信息进行检查。
     *
     * 请注意，在生产环境中，React 只会进行一次渲染。严格模式只在开发环境中启用，以帮助你更好地发现问题。
     */
)
