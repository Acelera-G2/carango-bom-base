import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import PrivateRoute from './PrivateRouter';
import PublicRouter from './PublicRouter';
function Routes() {
    const { token } = useAuth();

    return(
        token ? <PrivateRoute/>:<PublicRouter />
    );
}
export default Routes;