import jslogo from "/src/assets/JavaScript-logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
function Header(){
    return(
        <header className="container">
            <img className="jslogo" src={jslogo} alt="javascript" />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/docs"}>docs</Link></li>
                <li><Link to={"/examples"}>Examples</Link></li>
            </ul>
            
        </header>
    )
}
export default Header;