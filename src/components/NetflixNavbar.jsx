import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.png'


const NetflixNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid={props.isFluid || true}>
        <Navbar.Brand href="#home">
          {' '}
          <img src={logo} alt="logo" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">Tv Shows</Nav.Link>
            <Nav.Link className='text-white' href="#link">Movies</Nav.Link>
            <Nav.Link className='text-white' href="#link">Recently Added</Nav.Link>
            <Nav.Link className='text-white' href="#link">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar
