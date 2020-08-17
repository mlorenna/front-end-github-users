import React from 'react';
import './Avatar.scss'
const Avatar: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return(
        <div className="avatar-circle">
            <img src={props.url} alt=""/>
        </div>
    )
}

export default Avatar