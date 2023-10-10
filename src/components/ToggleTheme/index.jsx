import { Button } from 'antd'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

import './style.css'

export default function ToggleTheme({darkTheme, toggleTheme}){

  return(
    <div className="toggle-theme">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
      </Button>
    </div>
  )
}