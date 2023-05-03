import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipes.css'
const Recipes = ()=> {
    const recipes = useLoaderData();
    const{recipeImg,recipeImg1,recipeImg2,name,recipeDetails,Rating,img}=recipes
    return (
        <div className='full'>
 <Card className='banner-card'>
        <Card.Img className='banner' variant="top"  src={img} />
        <Card.Body>
          <Card.Text>
         
<h1>{name}</h1>      
    </Card.Text>
        </Card.Body>
      </Card>


    <CardGroup className='main-card'>
      <Card className='recipe-card'>
        <Card.Img className='recipe-img'  variant="top" src={recipeImg} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           {recipeDetails}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='recipe-card'>
        <Card.Img className='recipe-img' variant="top" src={recipeImg2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           {recipeDetails}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='recipe-card'>
        <Card.Img className='recipe-img' variant="top" src={recipeImg1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
                 {recipeDetails}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </div>
    );
};

export default Recipes;