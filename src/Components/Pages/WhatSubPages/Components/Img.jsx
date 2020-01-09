import React from "react"
import classNames from 'classnames'

export default function Img({src, addClass = ''}) {
    return (
        <div className="job__images">
            <div className="job__images_wrapper">
                <img className={classNames("sub_service_image", addClass)} src={src} height="400" alt="?"/>
            </div>
        </div>
    );
}
