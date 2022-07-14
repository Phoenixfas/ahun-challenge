// import {useEffect} from 'react';
import './App.css';
import { TrackerCard } from './components/trackerCard/TrackerCard';
import { UserCard } from './components/userCard/UserCard';

function App() {

  // useEffect(() => {
  //   fetch(`https://wookie.codesubmit.io/time-tracking`, {
  //         method: "GET",
  //         headers: {
  //             "Content-Type": "application/json"
  //         }
  //     })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, []);

  return (
    <div className="app">
      <div className="app__container">
        <UserCard />
        <div className="trackContainer">
          <TrackerCard />
        </div>
      </div>
    </div>
  );
}

export default App;
