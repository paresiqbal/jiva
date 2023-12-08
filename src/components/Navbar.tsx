// RDD
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" aria-label="Dashboard">
        Home
      </NavLink>
    </nav>
  );
}
