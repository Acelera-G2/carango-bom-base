import React from 'react'; 
import {Route as RouteDOM, Redirect, Switch}  from 'react-router-dom';
import { Layout } from '../components';
import { useAuth } from '../hooks/AuthContext';
import RegisterBrand from '../pages/Brand/RegisterBrand';
import Brandlist from '../pages/Brand/BrandList';
import RegisterCar from '../pages/Car/RegisterCar';
import RegisterUser from '../pages/User/RegisterUser';
import ListUser from '../pages/User/ListUser';
import ListCar from '../pages/Car/ListCar';

const IsPrivateRoute = ({component: Component, ...rest}) => {
    const { token } = useAuth();
    return(
        <RouteDOM {...rest} render={({...props})=>{
            return( 
                <Switch>
                    <Layout {...props}>
                        {token ? <Component />: (
                                    <Redirect
                                        to={{ pathname: '/login'}}
                                    />)
                        }
                    </Layout>
                </Switch>
            );
        }} />
    );
}

const PrivateRoute = () =>{
    return (
        <>
            <IsPrivateRoute 
                path="/register-brand"
                component={RegisterBrand}
            />
            <IsPrivateRoute 
                path='/change-brand/:id'
                component={RegisterBrand}
                
            />
            <IsPrivateRoute 
                path='/change-vehicle/:id'
                component={RegisterCar}
                
            />
            <IsPrivateRoute 
                path='/register-vehicle'
                component={RegisterCar}
                
            />
            <IsPrivateRoute 
                path="/list-vehicle"
                component={ListCar}
            />
            <IsPrivateRoute 
                path="/register-user"
                component={RegisterUser}
            />
            <IsPrivateRoute 
                path='/change-user/:id'
                component={RegisterUser}
            />
            <IsPrivateRoute 
                path="/list-user"
                component={ListUser}
            />
            <IsPrivateRoute 
                path="/list-brand"
                component={Brandlist}      
            />
            <IsPrivateRoute 
                path="/"
                component={ListCar} exact   
            />
        </>
    )
}


export default PrivateRoute;