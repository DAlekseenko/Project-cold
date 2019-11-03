import React, {PureComponent} from 'react';
import PageLayout from "../../Decorators/PageLayout"
import {Link} from 'react-router-dom'

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
                    <Link to='/' className="i-button i-button--yellow-small -main-link">
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        )
    }
}

export default PageLayout(NotFound)