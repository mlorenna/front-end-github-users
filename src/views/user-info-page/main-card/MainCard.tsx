import React from 'react';
import "./MainCard.scss"
import Segment from './segment/Segment';
import Avatar from './Avatar/Avatar';

const MainCard: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return (
        <div className="card-container">
            <Avatar></Avatar>
            <span className="card-username-text bolder name">Username</span>
            <div className="flex-row-center">
                <span className="card-username-text bolder spacing">Nickname</span>
                <span className="card-username-text bolder spacing">Date entered</span>
            </div>
            <div className="flex-row-center">
                <span className="card-username-text spacing">00 Following</span>
                <span className="card-username-text spacing">0 Gists</span>
            </div>
            <Segment></Segment>
            <div className="divide-line"></div>
        </div>
    )
}

export default MainCard