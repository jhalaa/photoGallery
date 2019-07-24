import React from 'react';
import './App.css';
import Gallery from './Gallery'

function App() {
  const images = [{url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",caption:"Bulbasaur"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",caption:"Charmander"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",caption:"Squirtle"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",caption:"Diglet"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",caption:"Butterfree"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png",caption:"Jigglypuff"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png",caption:"Haunter"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png",caption:"Staryu"},
    {url:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png",caption:"Grimer"}];
  return (
    <div className="App">
      <Gallery images={images}/>
    </div>
  );
}

export default App;
