import React from 'react';
import {Navbar} from '../index';

function Layout({children}) {
    return(
        <Navbar children={children}/>
    );
}
export {Layout};