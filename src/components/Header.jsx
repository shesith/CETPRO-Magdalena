import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="backdrop relative">
        <article className="flex justify-between items-center content-header container">
          <div className="img-size center">
            <img src={logo} alt="magdalenaLogo" />
          </div>
          <div className="img-size center">
            <img src={banner} alt="magdalenaLogo" />
          </div>
        </article>
        <NavLink
          className="flex gap-1 bg-gray-400 p-4 rounded text-white absolute top-4 right-4"
          to="/login"
        >
          Iniciar sesión
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-login-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
          </svg>
        </NavLink>
      </header>
    </>
  );
}
