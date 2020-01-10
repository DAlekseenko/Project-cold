import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Breadcrumbs({title}) {
    return (
        <div className='bread'>
            <NavLink to='/'>Главная</NavLink> / <NavLink to='/what'>Услуги</NavLink> / <span
            className='bread-current'>{title}</span>
        </div>
    )
}

