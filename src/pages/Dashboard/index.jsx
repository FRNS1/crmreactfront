import NavbarDashboard from '../../components/NavbarDashboard'
import HeaderDashboard from '../../components/HeaderDashboard'

import { DashboardContainer, DashboardContent, Content } from './style'

export default function Dashboard() {
  return(
    <DashboardContainer>
      <HeaderDashboard/>
      <DashboardContent>
        <NavbarDashboard/>
        <Content>
          <h1>Dashboard</h1>
        </Content>
      </DashboardContent>
    </DashboardContainer>
  )
}