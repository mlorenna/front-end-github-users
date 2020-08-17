import React from 'react';
import './Avatar.scss'
const Avatar: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return(
        <div className="avatar-user-info-circle">
            <img src="https://avatars0.githubusercontent.com/u/12418140?v=4" alt=""/>
        </div>
    )
}

export default Avatar