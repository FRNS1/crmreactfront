import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd'
import Cookies from 'js-cookie';
import {  LineChartOutlined, TeamOutlined, DollarOutlined, SwapOutlined, AndroidOutlined  }from '@ant-design/icons'

import './style.css'


export default function NavbarDashboard({ darkTheme }){
  const navigate = useNavigate();
  const navegaParaDashboard = () => {
    navigate('/dashboard');
  };
  const navegaParaClientes = () => {
    navigate('/pessoas');
  };
  const handleButtonClickPropostas = () => {
    navigate('/visualizacaopropostas');
  };
  const handleButtonClickPagamentos = () => {
    navigate('/registropagamentos');
  };

  const handleButtonClickDeltaHub = () => {
    navigate('/deltahubbackoffice');
  };

  return(
    <Menu theme={darkTheme} mode='inline' className='menu-bar'>
      <Menu.Item key='dashboard' icon={<LineChartOutlined />} onClick={navegaParaDashboard}>
        Dashboard
      </Menu.Item>
      <Menu.Item key='client' icon={<TeamOutlined />} onClick={navegaParaClientes}>
        Clientes
      </Menu.Item>
      <Menu.Item key='proposta' icon={<SwapOutlined />} onClick={handleButtonClickPropostas}>
        Propostas
      </Menu.Item>
      {Cookies.get('usergroup') == 'MASTER' ? (
        <>
          <Menu.Item key='pagamentos' icon={<DollarOutlined />} onClick={handleButtonClickPagamentos}>
            Pagamentos
          </Menu.Item>
          <Menu.Item key='deltahubbackoffice' icon={<AndroidOutlined />} onClick={() => handleButtonClickDeltaHub}>
            DeltaHub Back Office
          </Menu.Item>
        </>
      ): null}
    </Menu>
  )
}