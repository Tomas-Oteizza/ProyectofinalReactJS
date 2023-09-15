import { NavLink } from "react-router-dom";
import CartWidgets from "./CartWidgets";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact>
        <h3>CeluStore</h3>
      </NavLink>
      <div className="marcas">
        <NavLink to="/category/Samsung" activeClassName="ActiveOption" className="Option">
          Samsung
        </NavLink>
        <NavLink to="/category/Iphone" activeClassName="ActiveOption" className="Option">
          Iphone
        </NavLink>
        <NavLink to="/category/Pixel" activeClassName="ActiveOption" className="Option">
          Pixel
        </NavLink>
        <NavLink to="/category/Motorola" activeClassName="ActiveOption" className="Option">
          Motorola
        </NavLink>
      </div>
      <NavLink to="/CartWidgets" exact>
        <CartWidgets/>
      </NavLink>
    </nav>
  );
}

export default Navbar;
