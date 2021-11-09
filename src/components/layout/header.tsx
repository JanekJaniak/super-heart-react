import { Fragment } from "react"

import logo from "../../img/logo.png"

const Header = (props:any) => {
  console.log( props)
  return (<Fragment>
    <header>
      <img 
        className="main-logo" 
        src={logo}
        height="60px" 
        width="224px"
        alt="Heart logo"
      ></img>
    </header>
  </Fragment>)
}

export default Header