import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="dark">
        <Container>
            <Navbar.Brand style={{color:"green"}} href="/"><b>DEFALTMOVIES</b></Navbar.Brand>
            <Nav>
            <Nav.Link style={{color:"white"}} href="#trending"><b>TRENDING</b></Nav.Link>
            <Nav.Link style={{color:"white"}} href="#superhero"><b>SUPERHERO</b></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
     </div>
    )
}

export default NavigationBar