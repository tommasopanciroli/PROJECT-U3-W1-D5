import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const NetflixNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid={props.isFluid || true}>
        <Link className="navbar-brand" to="/">
          <div>
            <img src={logo} alt="logo" width={100} />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white">
              <div>Home</div>
            </Link>
            <Link to="/tvshows" className="nav-link text-white">
              <div>Tv Shows</div>
            </Link>
            <Link className="nav-link text-white">
              <div>Movies</div>
            </Link>
            <Link className="nav-link text-white">
              <div>Recently Added</div>
            </Link>
            <Link className="nav-link text-white">
              <div>My List</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar
