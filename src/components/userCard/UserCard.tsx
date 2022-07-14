import * as React from 'react';
import './UserCard.css';
import useStore from '../../store/store';
import ProfilePic from "../../assets/images/image-jeremy.png";

export interface UserCardProps {

}

export const UserCard: React.FC<UserCardProps> = () => {
    const {activeTimeframe, setActiveTimeframe} = useStore();
    // const handleClick = (timeframe: string): any => {
    //     setActiveTimeframe(timeframe);
    // }
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
                <h3 className={`h3 ${activeTimeframe === "daily" && "active"}`} onClick={() => setActiveTimeframe("daily")}>Daily</h3>
                <h3 className={`h3 ${activeTimeframe === "weekly" && "active"}`} onClick={() => setActiveTimeframe("weekly")}>Weekly</h3>
                <h3 className={`h3 ${activeTimeframe === "monthly" && "active"}`} onClick={() => setActiveTimeframe("monthly")}>Monthly</h3>
            </div>
        </div>
    )
}