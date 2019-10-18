import React from 'react';
import PageLayout from "../../Decorators/PageLayout"

export const NotFound = () => (
    <div style={{height: '85vh'}}>
        <div className="which__wrap l-wrap">
            <h1>404 Page Not Found :(</h1>
        </div>
    </div>
)

export default PageLayout(NotFound)