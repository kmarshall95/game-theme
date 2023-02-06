import React from 'react';

const characterbody = ({value}) => {
   
   

    return (
        <div className='characterBody'>
            {/* new character body based on XD Design */}
            <div className="characterBodycard grid-container">
                <h1>{value.Character_Name}</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={value.Character_Image} alt={value.Character_Name} />
                        <p>{value.Some_attacks}</p>
                    </div>
                    <div className="col-sm-6">
                        <p>{value.Long_Desc}</p>
                        <p>{value.Power_Level_1}</p>
                        <p>{value.Power_Level_2}</p>
                        <p>{value.Power_Level_3}</p>
                        <p>{value.Power_Level_4}</p>
                        <p>{value.Power_Level_5}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <p>{value.Type}</p>
                        <p>{value.Weakness}</p>
                    </div>
                    <div className="col-sm-9">
                        <div className="row row-cols-2">
                            <div><p>{value.Pick_a_power}</p></div>
                            <div><p>{value.Weapon_playstyle}</p></div>
                            <div><p>{value.Weapon_B}</p></div>
                            <div><p>{value.Science}</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-auto">
                        <p>{value.Weapons}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>{value.Unique_Missions_1}</p>
                        <p>{value.Unique_Missions_2}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>{value.Class_missions_1}</p>
                        <p>{value.Class_missions_2}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <h2>Character Background</h2>
                        <p>{value.Faction}</p>
                        <p>{value.Fighting_background}</p>
                        <p>{value.Attack_movement}</p>
                    </div>
                    <div className="col-sm-3">
                        <h2>Reference</h2>
                        <ol>
                            <li>{value.Reference_1}</li>
                            <li>{value.Reference_2}</li>
                            <li>{value.Reference_3}</li>
                            <li>{value.Reference_4}</li>
                            <li>{value.Reference_5}</li>
                            <li>{value.Reference_6}</li>
                            <li>{value.Reference_7}</li>
                        </ol>
                    </div>
                    <div className="col-sm-3">
                        <h2>Class Missions</h2>
                        <ul>
                            <li>{value.Group_Missions_1}</li>
                            <li>{value.Group_Missions_2}</li>
                            <li>{value.Group_Missions_3}</li>
                            <li>{value.Group_Missions_4}</li>
                            <li>{value.Group_Missions_5}</li>
                            <li>{value.Group_Missions_6}</li>
                            <li>{value.Group_Missions_7}</li>
                            <li>{value.Group_Missions_8}</li>
                            <li>{value.Group_Missions_9}</li>
                            <li>{value.Group_Missions_10}</li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* {Object.entries(value).map((ability, index) => (
               <p>
                    {ability}
                </p>
            ))    
            } */}
        </div>
    )
}

export default characterbody;