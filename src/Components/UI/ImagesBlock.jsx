import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ImageModal from "./ImageModal"

export default class ImagesBlock extends React.PureComponent {

    state = {
        src: null
    }

    onToggle = (src) => () => {
        this.setState({src})
    }

    render() {
        let {images, alt} = this.props
        return (
            <Fragment>
                <div id="works" className="job__images">
                    {images.map(src =>
                        <div key={src} className="job__images_wrapper" onClick={this.onToggle(`/images/jobs/${src}`)}>
                            <img src={`/images/jobs${src}`} alt={alt} className="job__image"/>
                        </div>
                    )}
                </div>
                <ImageModal src={this.state.src} alt={alt} toggleModal={this.onToggle(null)}/>
            </Fragment>
        );
    }
}

ImagesBlock.propTypes = {
    images: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired,
}
