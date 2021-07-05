import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import RouteDefault from './RouteDefault';
import CadastroMarca from '../pages/CadastroMarca';
import ListagemMarcas from '../pages/ListagemMarcas';

function Routes() {
    return(
        <BrowserRouter>    
            <Switch>
                <RouteDefault 
                    path="/cadastro-marca"
                    component={CadastroMarca}
                />
                <RouteDefault 
                    path='/alteracao-marca/:id'
                    component={CadastroMarca}
                />
                <RouteDefault 
                    path="/"
                    component={ListagemMarcas}
                />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;