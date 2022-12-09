import React from "react";
import ComponenteDiProva from "./ComponenteDiProva"
import ComponenteDiProva2 from "./ComponenteDiProva2"

const cards = {
  nome : "Gabriele",
  cognome : "Pagnotta"
}

const cards2 = {
  nome : "Giovanni",
  cognome : "Magis"
}

function App() {
  return (
    <div className="App">
      <ComponenteDiProva nome={cards.nome} cognome={cards.cognome} />
      <ComponenteDiProva2 {...cards2}/>
    </div>
  );
  
};


export default App;

