import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const MissionList = ({missions}) => {
    const [missionData, setMissions] = useState([]);

    useState(() => {
        setMissions(missions);
    }, []);

    return (
        <div className="grid-container">
           <div className="row">
           {missionData.map((missionReport, index) => (
                <div className="col-4">
                    <div className="mission-card" key={index}>
                    <div className="mission-card-content">
                        <h2>{missionReport.Character_Name}</h2>
                        <p><strong>Location: </strong>{missionReport.Locations}</p>
                        <p><strong>Faction: </strong>{missionReport.Faction}</p>
                        <p><strong>Anti-Faction: </strong>{missionReport.Anti_Faction}</p>
                        {/* <ul>
                            <h3>Mission Chains</h3>
                            <li><strong>Power Unlock: </strong>{missionReport.Power_Level_1}</li>
                            <li>{missionReport.Group_Missions_1}</li>
                            <li> <strong>Enemy Upgrade: </strong>{missionReport.Enemies_Lvls_1}</li>
                            <li>{missionReport.Group_Missions_2}</li>
                            <li><strong>Power Unlock: </strong>{missionReport.Power_Level_2}</li>
                            <li>{missionReport.Group_Missions_3}</li>
                            <li> <strong>Enemy Upgrade: </strong>{missionReport.Enemies_Lvls_2}</li>
                            <li>{missionReport.Group_Missions_4}</li>
                            <li><strong>Power Unlock: </strong>{missionReport.Power_Level_3}</li>
                            <li>{missionReport.Group_Missions_5}</li>
                            <li> <strong>Enemy Upgrade: </strong>{missionReport.Enemies_Lvls_3}</li>
                            <li>{missionReport.Group_Missions_6}</li>
                            <li><strong>Power Unlock: </strong>{missionReport.Power_Level_4}</li>
                            <li>{missionReport.Group_Missions_7}</li>
                            <li> <strong>Enemy Upgrade: </strong>{missionReport.Enemies_Lvls_4}</li>
                            <li>{missionReport.Group_Missions_8}</li>
                            <li><strong>Power Unlock: </strong>{missionReport.Power_Level_5}</li>
                            <li>{missionReport.Group_Missions_9}</li>
                            <li> <strong>Enemy Upgrade: </strong>{missionReport.Enemies_Lvls_5}</li>
                            <li>{missionReport.Group_Missions_10}</li>
                        </ul> */}
                        <p>{missionReport.Long_Desc}</p>
                        <p>{missionReport.Unique_Missions_1}</p>
                        <p>{missionReport.Unique_Missions_2}</p>
                        <p>{missionReport.Pitch}</p>
                    </div>
                </div>
                </div>
            ))}
           </div>
                    
                        
        </div>
    )
}

export default MissionList;