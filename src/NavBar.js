import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" expand={"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/Posts"}>
                Posts
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/Albums"}>
                Albums
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
