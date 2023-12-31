import React from 'react';
import { Button,} from 'react-bootstrap';
import { FaGrinHearts } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ChefCard = ({ Chef }) => {
    const { id,name, img, experience, likes, recipes, details } = Chef
    return (
        <>
      <div className='BB m-5 '>
        <img className='MM w-50 ' variant="top" src={img} />
        <div>
<h1 className='chef-name'>{name}</h1>
<hr />
          <div>
            <p>
           {details}

            </p>
          </div>
          <div>
            <h5>
            {experience}
            </h5>
           
          </div>
          <p></p>
          <div className='d-flex justify-content-sm-between'>
          <div>
            <h6>
          recipes: {recipes}

            </h6>
          </div>

          <div>
            <p>
          <FaGrinHearts className='fs-5'/>
         _{likes}

            </p>
          </div>
        
          </div>
<Link to={`/chef/${id}`}>
<Button variant="danger">View Recipes</Button>

</Link>
        </div>
        <div>
          
        </div>
      </div>
    </>
    );
};

export default ChefCard;