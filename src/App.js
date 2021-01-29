import React, { Fragment } from 'react';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container withe">
        <h1>Formulario</h1>
      </div>
    </Fragment>
  );
}

export default App;
