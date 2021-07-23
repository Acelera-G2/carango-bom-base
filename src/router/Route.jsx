import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import RouteDefault from './RouteDefault';
import RegisterBrand from '../pages/Brand/RegisterBrand';
import Brandlist from '../pages/Brand/BrandList';
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
                    path='/change-vehicle/:id'
                    component={RegisterCar}
                />
                <RouteDefault 
                    path='/register-vehicle'
                    component={RegisterCar}
                />
                <RouteDefault 
                    path='/list-vehicle'
                    component={ListCar}
                />
                <RouteDefault 
                    path="/"
                    component={Brandlist}
                />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;