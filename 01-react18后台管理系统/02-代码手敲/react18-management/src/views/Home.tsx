/**
 * @Author liming
 * @Date 2022/11/23 15:52
 **/

import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/*左边侧边栏*/}
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <MainMenu/>
            </Sider>
            {/*右边内容*/}
            <Layout className="site-layout">
                {/*右侧头部*/}
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }}>
                    {/*面包屑*/}
                    <Breadcrumb style={{ lineHeight:'64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/*右侧内容部分-白色底盒子*/}
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/*窗口部分*/}
                    <Outlet/>
                </Content>
                <Footer style={{ textAlign: 'center',padding:0,lineHeight:'48px'}}>后台管理系统底部</Footer>
            </Layout>
        </Layout>
    );
};

export default View;
