import { Menu } from 'antd'
import './style.css'

import {  DashboardOutlined, PayCircleOutlined  }from '@ant-design/icons'

export default function NavbarDashboard(){
  return(
    <Menu theme='dark' mode='inline' className='menu-bar'>
      <Menu.Item key='dashboard' icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key='client' icon={<DashboardOutlined />}>
        Clientes
      </Menu.Item>
      <Menu.Item key='proposta' icon={<DashboardOutlined />}>
        Propostas
      </Menu.Item>
      <Menu.Item key='pagamentos' icon={<PayCircleOutlined />}>
        Pagamentos
      </Menu.Item>
      <Menu.Item key='deltahubbackoffice' icon={<DashboardOutlined />}>
        DeltaHub Back Office
      </Menu.Item>
    </Menu>
  )
}