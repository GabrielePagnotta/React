import React from 'react'

// ComponenteUno è la funzione pricipale che mi indica dove andrà digitato il contenuuto:
function ComponenteUno() {
  return (
    // per poter aggiungere una classe ad un tag devo utilizzare il "ClassName" siccome si utilizza il linguaggio jsx:
    <section className="classe">
        <Saluto />
        <hr/>
        <Presentazione />
    </section>
  )
};
// per creare componenti posso aggiungerli direttamente alla section oppure creare delle costanti:

const Saluto = () =>{
   return <h4>ciao mi chiamo Gabriele</h4>
};

// se voglio aggiungere più elementi alla mia costante devo utilizzare il "React.Fragment":

const Presentazione = () =>{
  return <React.Fragment>
    <h2>ciao mi chiamo Gabriele</h2>
    <h3>ho 24 anni</h3>
    <h4>sono italiano</h4>

  </React.Fragment>
}



export default ComponenteUno