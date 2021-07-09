import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import RouteDefault from './RouteDefault';
import RegisterBrand from '../pages/Brand/RegisterBrand';
import ListBrand from '../pages/Brand/ListBrand';
import RegisterCar from '../pages/Car/RegisterCar';
import ListCar from '../pages/Car/ListCar';

function Routes() {
    return(
        <BrowserRouter>    
            <Switch>
                <RouteDefault 
                    path="/register-brand"
                    component={RegisterBrand}
                />
                <RouteDefault 
                    path='/change-brand/:id'
                    component={RegisterBrand}
                />
                <RouteDefault 
                    path='/register-car'
                    component={RegisterCar}
                />
                <RouteDefault 
                    path='/list-car'
                    component={ListCar}
                />
                <RouteDefault 
                    path="/"
                    component={ListBrand}
                />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;