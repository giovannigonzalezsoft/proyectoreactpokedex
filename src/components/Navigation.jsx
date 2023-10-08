import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/pokedex_logo.png";

export const Navigation = () => {
  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Pokedex" />
        </Link>
      </header>
      <Outlet />
    </>
  );
};
