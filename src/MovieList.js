import React from 'react';
import ItemMovie from './ItemMovie';

import LoadingHOC from './LoadingHOC';


const MovieList = ({movies}) => {
 
    return ( 
        <div>
           <div className='list-movie'>
        
        {movies.map(el=><ItemMovie key={el.id} Y={el}/>)}
        </div> 
        </div>
     );
}
 
export default LoadingHOC(MovieList);