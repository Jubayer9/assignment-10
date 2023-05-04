import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLike } from "react-icons/fc";
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Recipes = () => {
    const Toast = () => {
        toast('You Like This Recipes 😘😘😘')
    }
    const recipes = useLoaderData();
    const { recipeImg, recipeImg1, recipeImg2, name, recipeDetails, recipeDetails2, recipeDetails3, recipeDetails4, recipeDetails5, img, recipeName, recipeName1, recipeName2, } = recipes;
    const [divisible, setDivisible] = useState(true)
    const [divisible1, setDivisible1] = useState(true)
    const [divisible2, setDivisible2] = useState(true)
    return (
        <div className='full'>
            <NavigationBar></NavigationBar>
            <Card className='banner-card'>
                <Card.Img className='banner' variant="top" src={img} />
                <Card.Body>
                    <Card.Text>

                        <h1 className='name'>{name}</h1>
                    </Card.Text>
                </Card.Body>
            </Card>

            <h1 className='best-3'> This Chef best 3 recipes </h1>
            <CardGroup className='main-card'>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg} />
                    <Card.Body>
                        <Card.Title>{recipeName}</Card.Title>
                        <Card.Text>
                            1 :{recipeDetails} <br />
                            2 :{recipeDetails2}<br />
                            3 :{recipeDetails3}<br />
                            4 :{recipeDetails4}<br />
                            5 :{recipeDetails5}<br />

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>
                        <button className='love-btn' disabled={!divisible} onClick={Toast}> <FcLike onClick={() => setDivisible(!divisible)} className='like'></FcLike></button>

                        <ToastContainer></ToastContainer>
                        <Rating
  placeholderRating={4.3}
  readonly
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/>
                    </Card.Footer>
                </Card>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg2} />
                    <Card.Body>
                        <Card.Title>{recipeName2}</Card.Title>
                        <Card.Text>
                            1 :    {recipeDetails} <br />
                            2 :    {recipeDetails2}<br />
                            3 :    {recipeDetails3}<br />
                            4 :    {recipeDetails4}<br />
                            5 :    {recipeDetails5}<br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>

                        <button className='love-btn' disabled={!divisible1} onClick={Toast}><FcLike onClick={() => setDivisible1(!divisible1)} className='like'></FcLike></button>
                        <ToastContainer></ToastContainer>

                        <Rating
  placeholderRating={4.3}
  readonly
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/>

                    </Card.Footer>
                </Card>
                <Card className='recipe-card'>
                    <Card.Img className='recipe-img' variant="top" src={recipeImg1} />
                    <Card.Body>
                        <Card.Title>{recipeName1}</Card.Title>
                        <Card.Text>
                            1 :    {recipeDetails} <br />
                            2 :    {recipeDetails2}<br />
                            3 :    {recipeDetails3}<br />
                            4 :    {recipeDetails4}<br />
                            5 :    {recipeDetails5}<br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='recipe-footer'>

                        <button className='love-btn' disabled={!divisible2} onClick={Toast}><FcLike onClick={() => setDivisible2(!divisible2)} className='like'></FcLike></button>
                        <ToastContainer></ToastContainer>

                        <Rating
  placeholderRating={4.3}
  readonly
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/>

                    </Card.Footer>
                </Card>
            </CardGroup>
            <Footer></Footer>
        </div>
    );
};

export default Recipes;