import React from 'react';
import {Route as RouteDOM}  from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function RouteDefault({component: Component, ...rest}) {
    return(
        <RouteDOM {...rest} render={({...props})=>{
            return(
                <>
                    <Layout {...props} />
                    <Component />
                </>
            );
        }} />
    );
}

export default RouteDefault;