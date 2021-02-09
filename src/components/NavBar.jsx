import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="none" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="fontNavbar" as={NavLink} to='/user' exact>Principal</Nav.Link>
                        <Nav.Link className="fontNavbar" as={NavLink} to='/peliculas'>Peliculas</Nav.Link>
                        <Nav.Link className="fontNavbar" as={NavLink} to='/series'>Series</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-secondary">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
