import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './Data';

function App() {
  return (
    <div>
      < Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
