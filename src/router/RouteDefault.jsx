import React from 'react';
import {Route as RouteDOM}  from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function RouteDefault({component: Component, ...rest}) {
    return(
        <RouteDOM {...rest} render={({...props})=>{
            <Layout {...props} />
        }} />
    );
}

export default RouteDefault;