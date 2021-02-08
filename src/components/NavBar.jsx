import { Form, FormControl, Nav, Navbar, Button, NavLink } from "react-bootstrap";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to='/' exact>Principal</Nav.Link>
                        <Nav.Link as={NavLink} to='/peliculas'>Peliculas</Nav.Link>
                        <Nav.Link as={NavLink} to='/series'>Series</Nav.Link>
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
