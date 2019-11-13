import React, {PureComponent} from 'react';

export default class PageComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.title = props.route && props.route.title || '';
        this.description = props.route && props.route.description || '';
        props.staticContext && props.staticContext.pageTitleSetter(this.title);
    }

    isBrowser() {
        return typeof document !== 'undefined';
    }

    componentWillMount() {
        if (this.isBrowser()) {
            window.scrollTo(0, 0);
            document.title = this.title;
            document.description = this.description;
        }
    }
}
