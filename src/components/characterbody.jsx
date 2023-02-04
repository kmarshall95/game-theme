import React from 'react';

const characterbody = ({value}) => {
   
   

    return (
        <div className='characterBody'>
            <div className="grid-container">
            <h1>{value.Character_Name}</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={value.Character_Image} alt={value.Character_Name} />
                    </div>
                    <div className="col-sm-8">
                        <p>{value.Pitch}</p>
                        <p>{value.Class_Names}</p>
                        <p>{value.Faction}</p>
                        <p>{value.Fighting_background}</p>
                        <p>{value.Attack_movement}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-auto">
                        <h2>Stats</h2>
                        <p>Balance {value.Balance}</p>
                        <p>Agility {value.Agility}</p>
                        <p>Engineering {value.Engineering}</p>
                        <p>Precision {value.Precision}</p>
                        <p>Dexterity {value.Dexterity}</p>
                        <p>Intuition {value.Intuition}</p>
                        <p>ATK {value.ATK}</p>
                        <p>SPD {value.SPD}</p>
                        <p>SCI-fi {value["SCI-fi"]}</p>
                        <p>DEF {value.DEF}</p>
                        <p>ENERGY {value.ENERGY}</p>
                        <p>ENhanded {value.ENhanded}</p>
                        <p>TECH {value.TECH}</p>
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