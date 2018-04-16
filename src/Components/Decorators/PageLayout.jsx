import React from 'react';
import NavMenu from "../Pages/Main/NavMenu";
import Footer from "../Pages/Main/Footer";

export default (Component) => (props) =>
    <div>
        <NavMenu />
        <Component {...props} />
        <Footer/>
    </div>

