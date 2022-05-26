import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default Layout;