import React from 'react';
import PageLayout from "../../Decorators/PageLayout"

export const NotFound = () => (
    <div className="which">
        <div className="which__wrap l-wrap" style={{marginTop: 50, marginBottom: -78}}>
            <h1>404 :( Page Not Found</h1>
        </div>
    </div>
)

export default PageLayout(NotFound)