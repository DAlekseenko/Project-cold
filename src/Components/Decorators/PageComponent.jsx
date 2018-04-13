import React, {Component} from 'react';

export default class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.title = props.route &&  props.route.title || '';
        props.staticContext && props.staticContext.pageTitleSetter(this.title);
    }

    isBrowser() {
        return typeof document !== 'undefined';
    }

    setTitle(title) {
        this.title = title;
        if (this.isBrowser() && title) {
            document.title = title;
        }
    }

    componentWillMount() {
        if (this.isBrowser() && this.title) {
            window.scrollTo(0,0);
            document.title = this.title;
        }

    }
}
