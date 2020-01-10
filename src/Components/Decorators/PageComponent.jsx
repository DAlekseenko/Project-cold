import React, {PureComponent} from 'react';

export default class PageComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.title = props.route && props.route.title || '';
        this.description = props.route && props.route.description || '';
        this.h1 = props.route && props.route.h1 || '';
        props.staticContext && props.staticContext.pageTagsSetter(this.title, this.description);
    }

    isBrowser() {
        return typeof document !== 'undefined';
    }

    componentDidMount() {
        if (this.isBrowser()) {
            window.scrollTo(0, 0);
            document.title = this.title;
            document.description = this.description;
        }
    }
}
