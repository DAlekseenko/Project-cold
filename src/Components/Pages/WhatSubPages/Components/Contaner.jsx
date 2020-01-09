import React from 'react';

export default function Container({children}) {
    return (
        <div className="what">
            <div className="what__wrap l-wrap">
            {children}
            </div>
        </div>
    );
}
