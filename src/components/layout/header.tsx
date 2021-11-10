import logo from "../../img/logo.png"

const Header = () => {
  return (
    <header>
      <img 
        className="main-logo" 
        src={logo}
        height="60px" 
        width="224px"
        alt="Heart logo"
      ></img>
    </header>)
}

export default Header