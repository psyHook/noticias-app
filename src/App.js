import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container withe">
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
