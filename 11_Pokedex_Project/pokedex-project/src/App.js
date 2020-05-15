import React from "react";
import Pokecard from "./Pokecard"; //.js is not required

function App() {
  return (
    <div>
      <Pokecard 
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
      />
    </div>
  );
}

export default App;
