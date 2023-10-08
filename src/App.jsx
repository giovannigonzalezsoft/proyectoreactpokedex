import React from "react";
import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    //Provider en el punto mas alto de la app
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App;
