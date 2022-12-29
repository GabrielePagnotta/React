import React from 'react'


 const ComponenteDiProva = (el) => {
  
  const props = el
  const bottone = ()=>{
    alert("ciao")
  }
 
  return (
   <div>
    <h1>{props.auto}</h1>
    <h2>{props.cavalli}</h2>
    <button onClick={()=> alert(`la mia auto si chiama ${props.auto}`)}>clicca qui</button>
    <button onClick={bottone}>clicca qui</button>
    </div>
  )
}

export default ComponenteDiProva;
