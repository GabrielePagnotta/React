import React from "react";
import ComponenteDiProva from "./ComponenteDiProva"



const arraycars=[
  {auto:"ferrari",cavalli:"300cc"},
  {auto:"lamborghini",cavalli:"400cc"}
];

function App() {
  return (
    <div className="App">
      {arraycars.map((el,index) =>{
        return <ComponenteDiProva key={index} {...el}/>
      })}
      
      
    </div>
  );
  
};


export default App;

