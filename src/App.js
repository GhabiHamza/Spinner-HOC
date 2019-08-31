import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';
import Logo1 from './showshank.jpg';
import Logo2 from './bladerunner.gif';
import Logo from './inception.jpg';
import Logo3 from './A_Simple_Favor.png';

const tablist=[{id:'inception',rating:'4' ,image:Logo ,title:'Inception-2010'},{id:'simple-favor', rating:'2',image:Logo3,title:'A_Simple_Favor'},
          {id:'showshank', rating:'3',image:Logo1 ,title:'showshank'},{id:'blade', rating:'1',image:Logo2 ,title:'bladerunner'}]
          
          


  class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      movies: tablist
     }
  }
   componentDidMount(){
    setTimeout(()=>this.setState({isLoading: false}), 3000)
      }
      
     
     
   
  render() { 
    
    return (  
      <div className='App'>
        <MovieList loading={this.state.isLoading} movies={tablist} />
        
        
      </div>
    );
  }
}
 
export default App;
