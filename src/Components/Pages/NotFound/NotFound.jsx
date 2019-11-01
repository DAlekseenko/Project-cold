import React, {PureComponent} from 'react';
import PageLayout from "../../Decorators/PageLayout"

export class NotFound extends PureComponent {

    constructor(props) {
        super(props);
        props.staticContext && props.staticContext.setNotFound();
    }

    render() {
        return (
            <div className='not_found'>
                <div className="which__wrap l-wrap">
                    <h1 className='not_found__number'>404</h1>
                    <h2 className='not_found__text'>Страница не найдена</h2>
                </div>
            </div>
        )
    }
}

export default PageLayout(NotFound)