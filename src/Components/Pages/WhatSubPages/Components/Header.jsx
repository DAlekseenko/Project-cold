import React from 'react';

export default function Header({h1}) {
    return (
            <h1 className="what__title">
                <span className="header-title__line2">{h1}</span>
            </h1>
    );
}
