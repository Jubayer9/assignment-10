import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';

const ChefCard = ({chef}) => {
    const {id,name,img,experience,likes,recipes}=chef 
    return (
        <div>
            
            <Row xs={1} md={2} className="g-2">
      
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
             <div className='d-flex'>
             <Card.Text>
                {experience}
              </Card.Text>
               <Card.Text>
                {experience}
              </Card.Text> 
              <Card.Text>
                {experience}
              </Card.Text>
             </div>
            </Card.Body>
          </Card>
        </Col>
  
    </Row>
      
        </div>
    );
};

export default ChefCard;