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
)
