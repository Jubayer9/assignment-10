import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLike} from "react-icons/fc";
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Recipes = () => {
    const Toast =()=>{
toast('jubayer hossain')
    }
    const recipes = useLoaderData();
    const { recipeImg, recipeImg1, recipeImg2, name, recipeDetails,  recipeDetails2, recipeDetails3, recipeDetails4, recipeDetails5, Rating, img } = recipes;
  const [divisible,setDivisible]= useState(true)
  const [divisible1,setDivisible1]= useState(true)
  const [divisible2,setDivisible2]= useState(true)
    return (
        <div className='full'>
            <NavigationBar></NavigationBar>
            <Card className='banner-card'>
                <Card.Img className='banner' variant="top" src={img} />
                <Card.Body>
                    <Card.Text>

                        <h1>{name}</h1>
                    </Card.Text>
                </Card.Body>
            </Card>


            <CardGroup className='main-card'>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            1 :{recipeDetails} <br />
                            2 :{recipeDetails2}<br />
                            3 :{recipeDetails3}<br />
                            4 :{recipeDetails4}<br />
                            5 :{recipeDetails5}<br />

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>

                        <button  disabled={!divisible}  onClick={Toast}> <FcLike onClick={()=>setDivisible(!divisible)} ></FcLike></button>
                        <ToastContainer></ToastContainer>
                        
                    </Card.Footer>
                </Card>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        1 :{recipeDetails} <br />
                        2 :    {recipeDetails2}<br />
                        3 :    {recipeDetails3}<br />
                        4 :    {recipeDetails4}<br />
                        5 :    {recipeDetails5}<br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>

                        <button className='like' disabled={!divisible1} onClick={Toast}><FcLike onClick={()=>setDivisible1(!divisible1)} ></FcLike></button>
                        <ToastContainer></ToastContainer>
                        
                    </Card.Footer>
                </Card>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        1 :{recipeDetails} <br />
                        2 :    {recipeDetails2}<br /> 
                        3 :    {recipeDetails3}<br />
                        4 :    {recipeDetails4}<br />
                        5 :    {recipeDetails5}<br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>

                        <button className='like' disabled={!divisible2} onClick={Toast}><FcLike onClick={()=>setDivisible2(!divisible2)} ></FcLike></button>
                        <ToastContainer
                        
                        ></ToastContainer>
                        
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Recipes;