import React, { useState } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FcApproval } from 'react-icons/fc'

import NavSuperior from '../../components/Navsuperior'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'
import ToggleTheme from '../../components/ToggleTheme'

import './style.css'

const { Header, Sider, Content} = Layout

export default function Dashboard() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return(
    <Layout>
      <Sider 
        tigger={null}
        collapsible
        collapsed={collapsed}
        className='sidebarContainer' 
        theme={darkTheme ? 'light' : 'dark'}>
        <Logo/>
        <Sidebar darkTheme={darkTheme}/>
        <ToggleTheme 
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout>
        <Header
           style={{
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'white',
            boxShadow: '2vh 0vh 2vh rgba(122, 58, 206, 0.2)'
          }}
        >
          <div>
            <Button 
              type='text'
              className="toogle"
              onClick={() => setCollapsed(!collapsed)} 
              icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            />
          </div>
          <NavSuperior/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="dashboardHeader">
            <div className="cardHeader">
              <h2>Aprovações:</h2>
              <div className="cardContent">
                <div className="chartcontent">
                  <h2>Chart</h2>
                </div>
                <div className="cardNumbercontainer">
                  <h2 className="cardnumber">21323</h2>
                  <p className="status">
                    <FcApproval size={24}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="cardHeader">
              <h2>Recusados</h2>
              <div className="cardContent">
                <div className="chartcontent">
                  <h2>Chart</h2>
                </div>
                <div className="cardNumbercontainer">
                  <h2 className="cardnumber">21323</h2>
                  <p className="status">
                    <FcApproval size={24}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="cardHeader">
              <h2>Empréstimos</h2>
              <div className="cardContent">
                <div className="chartcontent">
                  <h2>Chart</h2>
                </div>
                <div className="cardNumbercontainer">
                  <h2 className="cardnumber">21323</h2>
                  <p className="status">
                    <FcApproval size={24}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="cardHeader">
              <h2>Em Análise</h2>
              <div className="cardContent">
                <div className="chartcontent">
                  <h2>Chart</h2>
                </div>
                <div className="cardNumbercontainer">
                  <h2 className="cardnumber">21323</h2>
                  <p className="status">
                    <FcApproval size={24}/>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboardChart">
            <div className="chartContainer">sdfs</div>
            <div className="chartContainer">fsfd</div>
            <div className="chartContainer">fsfd</div>
          </div>
          <div>gdsgfsdfg</div>
        </Content>
      </Layout>
    </Layout>
  )
}