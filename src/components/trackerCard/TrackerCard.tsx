import * as React from 'react';
import './TrackerCard.css';
import Ellipses from '../../assets/images/icon-ellipsis.svg';

export interface TrackerCardProps {

}

export const TrackerCard: React.FC<TrackerCardProps> = () => {
    return(
        <div className="trackerCard">
            <div className="trackerCard__container">
                <div className="trackerCard__header">
                    <h3>Tracker</h3>
                    <img src={Ellipses} alt='menu' />
                </div>
                <div className="trackerCard__body">
                    <h2>32hrs</h2>
                    <h5>Last Week - 36hrs</h5>
                </div>
            </div>
        </div>
    )
}