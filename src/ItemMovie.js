import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';


const ItemMovie = ({Y}) => {
    return (  
        <div>
            <Card className='card1'>
                <CardImg top height="152px" width="200px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
            </Card>

        </div>
    );
}
 
export default ItemMovie;