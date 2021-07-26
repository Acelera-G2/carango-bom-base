import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function Routes() {
    const { token } = useAuth();

    return(
        token ? <PrivateRoute/>:<PublicRoute />
    );
}
export default Routes;