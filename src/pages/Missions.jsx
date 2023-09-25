import react from 'react';
import MissionList from '../components/MissionsList';
import { characters } from '../content/characters';

const Missions = () => {
    return (
        <div>
            <h1>Missions</h1>
            {/* <Card className={"hi"} children="hey"></Card> */}
            <MissionList missions={characters} />

        </div>
    );
}

export default Missions;