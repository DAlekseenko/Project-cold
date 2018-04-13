import React from 'react';
import NavMenu from "../Pages/Main/NavMenu";

export default (Component) => (props) =>
    <div>
        <NavMenu />
        <Component {...props} />

    </div>

