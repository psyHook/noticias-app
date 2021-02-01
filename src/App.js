import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';

function App() {
  // Definir categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=51da28fd21934604bf2c09f41eb373cc`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo='Buscador de Noticias' />

      <div className='container withe'>
        <Formulario setCategoria={setCategoria} />
      </div>
    </Fragment>
  );
}

export default App;
