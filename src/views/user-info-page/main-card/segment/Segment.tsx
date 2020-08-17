import React from 'react';
import './Segment.scss'
import update from 'immutability-helper';
import { ISegmentButton } from '../../../../models/SegmentButton';
import ActivitySegment from './activity-segment/ActivitySegment';
import FollowersSegment from './followers-segment/FollowersSegment';

class Segment extends React.Component<{}, { buttons: Array<ISegmentButton> }> {

    constructor(props: ISegmentButton) {
        super(props)
        this.state = {
            buttons: [
                {
                    text: "Activity",
                    active: true
                },
                {
                    text: "Followers",
                    active: false
                }
            ]
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(ev: any) {
        ev.persist();        
        this.setState({
            buttons: update(this.state.buttons, {
                [ev.target.id]: { active: { $set: true } },
                [ev.target.id == 0 ? 1 : 0]: { active: { $set: false } }
            })
        })
    }

    renderSegmentButton(row: ISegmentButton, idx: number) {
        return (
            <button key={idx.toString()} onClick={this.onClick} id={idx.toString()} className={`${row.active ? 'active' : 'notActive'} segment-button`}>{row.text}</button>
        )
    }

    render() {
        return (
            <div className="segment-container">
                <div className="segment-button-container">
                    {this.state.buttons.map((row: ISegmentButton, idx: number) => this.renderSegmentButton(row, idx))}
                </div>
                <div className="divide-line"></div>
                <div className="segment-body">
                    {this.state.buttons[0].active ? <ActivitySegment></ActivitySegment> : <FollowersSegment></FollowersSegment>}
                </div>
            </div>
        )
    }
}

export default Segment