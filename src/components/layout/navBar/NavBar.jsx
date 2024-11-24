import { Link } from "react-router-dom"
import './NavbarStyle.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navLogo">
                <Link style={{ textDecoration: "none", color: "Black" }} to={"/"}>
                    <h1>Tomas Brizuela</h1></Link>
            </div>
            <div className="navOption">
                <ul>
                    <li><Link style={{
                        textDecoration: "none", color: "black", fontWeight: 400
                    }} to={"/blog"}>Blog</Link></li>
                    <li><Link style={{
                        textDecoration: "none", color: "black", fontWeight: 400
                    }} to={"/apps"}>Apps</Link></li>
                    <li><Link style={{
                        textDecoration: "none", color: "black", fontWeight: 400
                    }} to={"/cv"}>Cv</Link></li>
                    <li><Link style={{
                        textDecoration: "none", color: "black", fontWeight: 400
                    }} to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar