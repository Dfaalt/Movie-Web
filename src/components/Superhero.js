import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import aquamanImages from '../assets/Images/Superhero/aquaman.jpg'
import batmanImages from '../assets/Images/Superhero/Batman.jpg'
import deadpoolImages from '../assets/Images/Superhero/deadpool.jpg'
import spidermanImages from '../assets/Images/Superhero/spider man 3.jpg'
import spidermanwayhomeImages from '../assets/Images/Superhero/Spiderman way home.jpg'
import supermanImages from '../assets/Images/Superhero/superman return.jpg'

const Superhero = () => {
    return (
      <div>
        <Container>
          <br/>
          <h1 className='text-white'>SUPERHERO MOVIES</h1>
          <br/>
          <Row>
            <Col md={4} className='movieWrapper' id='superhero'>
              <Card className="movieImage">
                <Image src={aquamanImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AQUAMAN</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
             <Col md={4} className='movieWrapper'>
              <Card className="movieImage">
                <Image src={batmanImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>THE BATMAN</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
             <Col md={4} className='movieWrapper'>
              <Card className="movieImage">
                <Image src={deadpoolImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>DEADPOOL</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
             <Col md={4} className='movieWrapper'>
              <Card className="movieImage">
                <Image src={spidermanImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>SPIDER - MAN 3</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
             <Col md={4} className='movieWrapper'>
              <Card className="movieImage">
                <Image src={spidermanwayhomeImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>SPIDER - MAN NO WAY HOME</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
             <Col md={4} className='movieWrapper'>
              <Card className="movieImage">
                <Image src={supermanImages} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>SUPERMAN RETURN</Card.Title>
                        <Card.Text className='text-left'>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                      <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
             </Col>
          </Row>
        </Container>
      </div>
        
    )
}

export default Superhero