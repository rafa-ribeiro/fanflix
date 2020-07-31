import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>

      <BannerMain
        videoTitle="Eu sou fã de ..."
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
            "Compartilhe seus gostos e ajude outros a entender porque você é tão fã daquela banda, ou daquele livro, game, podcast ou de qualquer outra coisa que nos faça bem"
        }
      />

<Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />

    </div>
  );
}

export default Home;
