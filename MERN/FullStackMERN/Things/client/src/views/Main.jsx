import React, { useState } from 'react'
import AddThings from '../components/AddThings';
import Recent from '../components/Recent';
import ThingsTable from '../components/ThingsTable';
import LikesDashboard from '../components/LikeDashboard';

const Main = (props) => {
    const [thing, setThing] = useState([]);

    return (
        <div>
            <LikesDashboard />
           <ThingsTable thing={thing}  setThing={setThing} />
            <hr/>
           <AddThings thing={thing}  setThing={setThing}  />
           <hr/>
           <Recent thing={thing}  setThing={setThing} />
        </div>
    )
}
export default Main;