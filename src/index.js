import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

// Inicializa o react para uso. Toda a aplicação está dentro do container root


const Pagina404 = () => (<div>404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Começar das rotas mais específicas para as mais genéricas */}

      <Route path="/" component={Home} exact />
      <Route path="/cadastro-video" component={CadastroVideo} exact />
      <Route path="/cadastro-categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);
