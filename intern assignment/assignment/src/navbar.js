import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Domain" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Finance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              IT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              UI Designing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Business Development
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Gender" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Male</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Female
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Availability" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Avialable</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Unavialable
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;