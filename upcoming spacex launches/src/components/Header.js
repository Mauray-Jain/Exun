import "../components-style/Header.css";
import img from "../spacex.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div id="logo">
          <img src={img} alt="" />
        </div>
        <div id="links">
          <a rel="noreferrer" href="https://www.spacex.com/" target="_blank">
            Home Page
          </a>
        </div>
      </nav>
    </header>
  );
}
