import React from 'react';
import { Route as RouteDOM }  from 'react-router-dom';
import ListCar from '../pages/Car/ListCar';
import Login from '../pages/Login/Login';
import { Layout } from '../components';
import { Switch } from 'react-router-dom';

function PublicRouter() {

    return(
        <Switch>
            <RouteDOM render={({...props})=>{
                return(
                    <>
                    <Layout {...props}>
                        <RouteDOM  path="/" component={Login} exact/>
                        <RouteDOM  path="/login" component={Login}/>
                        <RouteDOM  path="/list-vehicle" component={ListCar}/>
                    </Layout>
                        
                    </>
                );
            }} />
        </Switch>
    );
}

export default PublicRouter;