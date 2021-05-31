import { useState, useEffect } from 'react';
import axios from 'axios'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

import Loader from '../components/Loader';

const Head = styled.div `
background-color: yellow;
border: 1px solid;
padding: 30px;
box-shadow: 5px 10px 18px red;
text-align: center;
`;

const PokeBox = styled.div `
background-color: yellow;
width: 150px;
height: 150px;
border: 1px solid;
padding-top: 60px;
box-shadow: 5px 10px 18px red;
text-align: center;

a {
  color: #555;
  font-weight:bold;
}
`;

const Pokemon = () => {

//  data
const [pokemon, setPokemon] = useState([]);

//loading state
const [loader, setLoader] = useState(true);

// Add an error state
const [error, setError] = useState(undefined);


useEffect (() => {
  console.log('Pokemon component mounts');

    window.setTimeout(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then( (response) => {
      const {data} = response;
      setPokemon(data.results);
      setLoader(false);
    })
    .catch( (error) => {
      console.log(error.response);

      const { status, data } = error.reponse;
      setError(`${status}, ${data}`);

    setLoader(false);
    });
    

  }, 1500); 


}, []
); 

console.log(pokemon);

return (
<div>
  <Head>
          <div className="text-center">
              <h1 className="h3 ">CHoose your Pokemon!</h1>
          <p>Click on each Pokemon to see its stats</p>
          </div>

  </Head>

    {loader && (
      <Loader />
    )}

    {!loader && error && (
      <p className="lead text-center">{error}</p>
    )}

    {!loader && !error && pokemon.length > 0 && (
  //    console.log(pokemon.length)
    <div  className="container">
      <div className="row">
          {pokemon.map((myPokemon, i)  => (    
          <div key={myPokemon.name}  className="col-lg-2 col-m-2 col-sm-12 m-3">   
            <PokeBox> 
                <p><Link to={`pokemon/${i + 1}`}>{myPokemon.name.toUpperCase()}</Link></p>
            </PokeBox>
            </div>
          ))}
      </div>
    </div>        
    )}

</div>
  
  );
}

export default Pokemon;

