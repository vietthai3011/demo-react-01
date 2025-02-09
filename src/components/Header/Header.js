import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={"/"} className="navbar-brand">
                    Ngo Viet Thai
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isActive ? "active" : isPending ? "pending" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/users"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isActive ? "active" : isPending ? "pending" : ""}`
                            }
                        >
                            User
                        </NavLink>
                        <NavLink
                            to="/admins"
                            className={({ isActive, isPending }) =>
                                `nav-link ${isActive ? "active" : isPending ? "pending" : ""}`
                            }
                        >
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <button className="btn fs-5 fw-semibold px-4">Log in</button>
                        <button className="btn btn-dark fw-normal px-3">Sign up</button>
                        {false && (
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item>Login</NavDropdown.Item>
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
