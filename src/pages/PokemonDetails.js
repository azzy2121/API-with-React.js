import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams, Link } from 'react-router-dom'; 

import Loader from '../components/Loader';


const PokemonDetails = () => {

const { pokemonId } = useParams();

//  data
const [pokemonDetails, setPokemonDetails] = useState([]);

//loading state
const [loader, setLoader] = useState(true);

// Add an error state
const [error, setError] = useState(false);


useEffect (() => {
  console.log('Pokemon Details component mounts');

    window.setTimeout(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then( (response) => {
      console.log(response);
      const {data} = response;
      setPokemonDetails(data);
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

console.log(PokemonDetails);

 return (

  <div>
    {loader && (
              <Loader />
    )}

    {!loader && error && (
              <p className="lead text-center">{error}</p>
    )}

    {!loader && !error && pokemonDetails && (
    <div>
      <h2 className="text-center bg-danger mt-2 h4 p-2 ">{pokemonDetails.name.toUpperCase()}</h2>

      <img  className="mx-auto d-block border border-danger rounded bg-secondary shadow-lg" src={pokemonDetails.sprites.front_default} alt="pic" width="200" height="200" />

      <table className="table m-5">
        <thead>    
            <tr>
              <th>Stats</th>
              <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{pokemonDetails.stats[0].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td>{pokemonDetails.stats[1].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>{pokemonDetails.stats[2].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>{pokemonDetails.stats[3].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>{pokemonDetails.stats[4].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>{pokemonDetails.stats[5].stat.name.toUpperCase()}</td>
              <td>{pokemonDetails.stats[5].base_stat}</td>
            </tr>                  
        </tbody>
      </table>

        <div>
          <Link to="/" className="btn btn-danger m-5">Go Back</Link>
        </div>
      </div>       
    )}
  </div>

 );
}

export default PokemonDetails;