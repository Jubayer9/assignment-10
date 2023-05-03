import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const recipes = useLoaderData();
    const{recipeImg,name,recipeDetails,Rating}=recipes;
    return (
        <div>
            <h1>Recipes</h1>
            Recipes
            Recipes
            Recipes
            Recipes
            Recipes
            Recipes
            Recipes

        </div>
    );
};

export default Recipes;