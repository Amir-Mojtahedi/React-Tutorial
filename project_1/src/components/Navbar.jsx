const logo = require("../media/react-logo.png")

export default function Navbar(){
    return(
      <nav>
        <img src={logo} />
        <h3>ReactFacts</h3> 
        <h4>React Course - Project 1</h4>
      </nav>
    )
  }