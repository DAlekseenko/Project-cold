import React from "react"
import classNames from 'classnames'

export default function Img({src, addClass = '', title}) {
    return (
        <div className="job__images">
            <div className="job__images_wrapper sub_service_image">
                <img className={classNames("sub_service_image", addClass)} src={src} height="400" alt={title} title={title}/>
            </div>
        </div>
    );
}
