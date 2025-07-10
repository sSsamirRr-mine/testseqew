import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";


export default function header() {
    return (
        <header className="header">
            <span className="logo">
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
                <li className="Log-out">
                    Log out
                </li>
            </ul>
        </header>
    );
}