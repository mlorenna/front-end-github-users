import React from 'react';
import './FollowersSegment.scss'
import Avatar from '../../../../components/avatar/Avatar';

const FollowersSegment: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return (
        <div className="followers-container">
            <div className="followers-info">
                <Avatar></Avatar>
                <div className="followers-info-text">
                    <span>Nome follower</span>
                    <span>email@example.com</span>
                </div>
            </div>
        </div>
    )
}

export default FollowersSegment