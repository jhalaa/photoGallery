import React from 'react';
import './App.css';
import Gallery from './Gallery'

function App() {
  var images = ["Image1", "Image2","Image3","Image4"];
  return (
    <div className="App">
      <Gallery images={images}/>
    </div>
  );
}

export default App;
