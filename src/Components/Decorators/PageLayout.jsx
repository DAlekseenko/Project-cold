import React from 'react'
import NavMenu from "../UI/Header/NavMenu"
import Footer from "../UI/Footer/Footer"

export default (Component) => (props) =>
    <div>
        <NavMenu />
        <Component {...props} />
        <Footer/>
    </div>
