import React from 'react'
import { Layout } from 'antd';
import { LayoutProps } from '../../types/LayoutProps'
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer'

const { Content } = Layout;

const AppLayout = ({ children }: LayoutProps) => {
    return (
        <Layout>
            <Nav />
            <Content>
                {children}
            </Content>
            <Footer />
        </Layout>
    )
}

export default AppLayout