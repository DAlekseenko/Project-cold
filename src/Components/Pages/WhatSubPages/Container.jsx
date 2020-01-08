import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";


export class Container extends PageComponent {
    render() {
        return <div style={{backgroundColor: 'red', fontSize: 20, paddingTop: 100}}>{this.description}</div>
    }
}

export default PageLayout(Container);