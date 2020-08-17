import React from 'react';
import {
    CodeOutlined
} from '@ant-design/icons';
import './ActivitySegment.scss'
const ActivitySegment: React.FC<any> = (props: React.PropsWithChildren<any>) => {
    return (
        <div className="activity-container">
            <div className="activity-title">
                <div className="activity-repository">
                    <CodeOutlined />
                    <span className="activity-text">Nome repositório</span>
                </div>
                <span className="activity-text">Last Update</span>
            </div>
            <div className="activity-description">
                <span>Descrição repositório</span>
            </div>
            <div className="activity-tag-languages">
                <div className="activity-tag">
                    <span className="acivity-tag-text">Tag1</span>
                </div>
                <div className="activity-tag">
                    <span className="acivity-tag-text">Tag2</span>
                </div>
            </div>
        </div>
    )
}

export default ActivitySegment