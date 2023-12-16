import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import infinityAvengers from '../assets/Images/Trending/infinity war.jpg'
import avatarImage from '../assets/Images/Trending/avatar 2.jpg'
import endGameImage from '../assets/Images/Trending/end game.jpg'
import freeGuyImage from '../assets/Images/Trending/free guy.jpg'
import kangImage from '../assets/Images/Trending/kang.jpg'
import secretWarImage from '../assets/Images/Trending/secret war.jpg'

const Trending = () => {
    return (
      <div>
        <Container>
          <br/>
          <h1 className='text-white'>TRENDING MOVIES</h1>
          <br/>
          <Row>
            <Col md={4} className='movieWrapper' id='trending'>
              <Card className="movieImage">
                <Image src={infinityAvengers} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AVENGERS - INFINITY WAR</Card.Title>
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
                <Image src={avatarImage} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AVATAR - THE WAY OF WATER</Card.Title>
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
                <Image src={endGameImage} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AVENGERS - END GAME</Card.Title>
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
                <Image src={freeGuyImage} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>FREE GUY</Card.Title>
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
                <Image src={kangImage} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AVENGERS - THE KANG DYNASTY</Card.Title>
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
                <Image src={secretWarImage} alt="infinityAvengersIMG" className='Images'/>
                  <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                      <Card.Title className='text-center'>AVENGERS - SECRET WARS</Card.Title>
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

export default Trending