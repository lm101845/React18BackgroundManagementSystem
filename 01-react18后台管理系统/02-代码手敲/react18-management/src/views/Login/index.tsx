/**
 * @Author liming
 * @Date 2023/10/7 16:01
 **/

import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './login.module.scss'
import initLoginBg from './init'
import {Button, Input, message, Space} from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less'

const Login: React.FC = () => {
    //加载完这个组件之后，进行initLoginBg初始化(加载背景)
    useEffect(() => {
        initLoginBg()
        window.onresize = function () {
            console.log('窗口尺寸改变了')
            initLoginBg()
        }
    }, [])
    //获取用户输入信息
    const [usernameVal,setUsernameVal] = useState("")   //定义用户输入用户名信息
    const [passwordVal,setPasswordVal] = useState("")   //定义用户输入密码信息
    const [captchaVal,setCaptchaVal] = useState("")   //定义用户输入验证码信息
    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        //获取用户输入的用户名
        // console.log(e.target.value,'获取用户输入信息')
        setUsernameVal(e.target.value)
    }

    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value);
    }
    const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setCaptchaVal(e.target.value);
    }


    // 点击登录按钮的事件函数
    const gotoLogin =()=>{
        console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchaVal);
        // 验证是否有空值
        if(!usernameVal.trim() || !passwordVal.trim()|| !captchaVal.trim()){
            message.warning("请完整输入信息！")
            return
        }
    }
    return <div className={styles.loginPage}>
        {/*存放背景*/}
        <canvas id="canvas" style={{display: 'block'}}></canvas>
        {/*登录盒子*/}
        <div className={styles.loginBox + " loginbox"}>
            {/*标题部分*/}
            <div className={styles.title}>
                <h1>通用后台系统</h1>
                <p>Happy EveryDay</p>
            </div>
            {/*表单部分*/}
            <div className="form">
                <Space direction="vertical" size="large" style={{display: 'flex'}}>
                    <Input placeholder="用户名" onChange={usernameChange}/>
                    <Input.Password placeholder="密码" onChange={passwordChange}/>
                    {/* 验证码盒子 */}
                    <div className="captchaBox">
                        <Input placeholder="验证码" onChange={captchaChange}/>
                        <div className="captchaImg" >
                            <img height="38"  alt="验证码" src="https://storage.live.com/users/0xb4ca83e6bf85b41e/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=135DFE8106FD65011C89EFE207BE64F5&fofoff=1"/>
                        </div>
                    </div>
                    <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
                </Space>
            </div>
        </div>
    </div>
}

export default Login
