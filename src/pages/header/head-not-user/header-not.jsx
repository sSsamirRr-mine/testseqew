import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./header-not.css";


export default function header() {
    return (
        <header className="header-not">
            <span className="logo-not">
                <img src={logo} alt="" />
                <h2>Fluent Study</h2>
            </span>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/works"}>Kurslar</Link>
                </li>
                <li>
                    <Link to={"/tests"}>Testlar</Link>
                </li>
                <li>
                    <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link to={"/me"}>Biz haqimizda</Link>
                </li>
                <li className="login-not">
                    <Link to={"/login"}>Kirish</Link>
                </li>
                <li className="reg-not">
                    <Link to={"./register"}>Ro'yhatdan o'tish</Link>
                </li>
            </ul>
        </header>
    );
}