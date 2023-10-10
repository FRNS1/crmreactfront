// import HeaderDashboard from '../../components/Navsuperior'
// import { DashboardContainer, DashboardContent, Content } from './style'
// import { Layout } from 'antd'
import { Layout, Menu, Button, theme } from 'antd'

import NavSuperior from '../../components/Navsuperior'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'

import './style.css'

const { Header, Sider, Content} = Layout

export default function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return(
    <Layout>
      <Sider className='sidebarContainer'>
        <Logo/>
        <Sidebar/>
      </Sider>
      <Layout>
        <Header
           style={{
            padding: 24,
            display: 'flex',
            background: 'yellow',
            boShadow: '2vh 0vh 2vh rgba(122, 58, 206, 0.2)'
          }}
        >
          <NavSuperior/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >Content</Content>
      </Layout>
    </Layout>
  )
}