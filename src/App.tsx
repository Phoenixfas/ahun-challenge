import {useEffect, useState} from 'react';
import './App.css';
import useStore from './store/store';
import { TrackerCard } from './components/trackerCard/TrackerCard';
import { UserCard } from './components/userCard/UserCard';

function App() {
  const [tracker, setTracker] = useState<any[]>([]);
  const {activeTimeframe} = useStore();

  useEffect(() => {
    fetch(`https://wookie.codesubmit.io/time-tracking`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(res => res.json())
      .then(data => {
        setTracker(data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <UserCard />
        <div className="trackContainer">
          {tracker.map((item, index) => (
            <TrackerCard key={index} title={item.title} previousTime={activeTimeframe==="daily" ? item.timeframes.daily.previous : activeTimeframe==="weekly" ? item.timeframes.weekly.previous : item.timeframes.monthly.previous } currentTime={activeTimeframe==="daily" ? item.timeframes.daily.current : activeTimeframe==="weekly" ? item.timeframes.weekly.current : item.timeframes.monthly.current } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
