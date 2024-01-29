import { Link } from "react-router-dom";
import LogoPag from "../assets/Logo.png";

const Logo = ({tamano}) => { 
    return(
        <Link to={"/"}>
            <img src= {LogoPag} alt="Logo Games  Lovers" width= {tamano}/>
        </Link>
    )
}

export default Logo;