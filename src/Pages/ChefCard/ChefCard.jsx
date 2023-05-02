import React from 'react';
import { Button } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    const { id, name, img, experience, likes, recipes, details } = chef
    return (
        <div className="m-4 w-50 ">
            <div className="col">
                <div className="card BB">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                        <p className="card-text">{experience}</p>
       <div className="d-flex justify-content-between">
       <p className="card-text">{likes} </p>
       <p className="card-text">{likes} </p>
       </div>
       <Button variant="danger">View Recipes</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;