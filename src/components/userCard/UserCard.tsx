import * as React from 'react';
import './UserCard.css';
import ProfilePic from "../../assets/images/image-jeremy.png";

export interface UserCardProps {

}

export const UserCard: React.FC<UserCardProps> = () => {
    return(
        <div className="userCard">
            <div className="profile">
                <div className="profile__pic">
                    <img className='img' src={ProfilePic} alt='profile'/>
                </div>
                <div className="profile__name">
                    <h5>Report for</h5>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeInterval">
                <h3>Daily</h3>
                <h3>Weekly</h3>
                <h3>Monthly</h3>
            </div>
        </div>
    )
}