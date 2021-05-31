import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Pokemon from './pages/Pokemon.js'
import PokemonDetails from './pages/PokemonDetails.js'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  const match = useRouteMatch();

  return (
    <div>
    <Header />

    <Switch>
      <Route exact path={`${match.url}pokemon/:pokemonId`}>
        <PokemonDetails />
      </Route>
      <Route exact path={match.url}>
        <Pokemon />
      </Route>
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
