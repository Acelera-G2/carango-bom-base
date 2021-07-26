import React from 'react';
import {Navbar} from '..';

function Layout({children}) {
    return(
        <Navbar children={children}/>
    );
}
export { Layout };
