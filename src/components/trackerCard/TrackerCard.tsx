import { useState, useEffect } from 'react';
import './TrackerCard.css';
import useStore from '../../store/store';
import Ellipses from '../../assets/images/icon-ellipsis.svg';
import Work from '../../assets/images/icon_wor.svg';
import Play from '../../assets/images/icon_pla.svg';
import Study from '../../assets/images/icon_stu.svg';
import Exercise from '../../assets/images/icon_exe.svg';
import Social from '../../assets/images/icon_soc.svg';
import SelfCare from '../../assets/images/icon_sel.svg';


export interface TrackerCardProps {
    title: string;
    currentTime: string;
    previousTime: string;
}


export const TrackerCard = (props: TrackerCardProps) => {
    const {activeTimeframe} = useStore();
    const [img, setImg] = useState("");
    const imageHandle = (title: string) => {
        switch (title) {
            case 'Work':
                return setImg(Work);
            case 'Play':
                return setImg(Play);
            case 'Study':
                return setImg(Study);
            case 'Exercise':
                return setImg(Exercise);
            case 'Social':
                return setImg(Social);
            case 'Self Care':
                return setImg(SelfCare);
        }
    }

    useEffect(() => {
        imageHandle(props.title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <div className={`trackerCard ${props.title.substring(0, 3)}`}>
            <div className="icon">
                <img src={img} alt={props.title} />
            </div>
            <div className="trackerCard__container">
                <div className="trackerCard__header">
                    <h3>{props.title}</h3>
                    <img src={Ellipses} alt='menu' />
                </div>
                <div className="trackerCard__body">
                    <h2>{props.currentTime}hrs</h2>
                    <h5>{activeTimeframe==="daily" ? "Yesterday" : activeTimeframe==="weekly" ? "Last Week" : "Last Month"} - {props.previousTime}hrs</h5>
                </div>
            </div>
        </div>
    )
}