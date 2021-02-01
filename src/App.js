import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';

function App() {

  // Definir categoria y noticias
  const [categoria, setCategoria] = useState('');

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container withe">
        <Formulario setCategoria={setCategoria}/>
      </div>
    </Fragment>
  );
}

export default App;
