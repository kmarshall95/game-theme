const Home = () => {
    return (
        <div className="home">
            <h1>Home Page</h1>
            <div className="grid-container">
                <div className="row">
                <h1>"Welcome to the world of Quantum Adventure, where technology and science meet action and adventure!</h1>
                <img src={require("../images/characters/teamphoto.png")} alt="Brilliant Neptune" />

                </div>
                <div className="row">
                    <ul>
                            <h1>Game Features</h1>
                        <li>
                            <p>In this open-world beat-em-up game, players will have the opportunity to master cutting-edge technology and harness the power of science to take on an array of enemies and challenges.</p>
                        </li>
                        <li>
                            <p>Choose from a variety of characters, each with their own unique customizable abilities and fighting styles to suit your playstyle.</p>
                        </li>
                        <li>
                            <p>Explore a variety of environments, from the bustling city streets to the depths of the ocean
                            </p>
                        </li>
                        <div>
                            <p>Take on a variety of missions, from fighting off waves of enemies to taking on the final boss.</p>
                        </div>
                        <li>
                            <p>Play the catalyst from a variety of different factions, each with their own unique abilities and fighting styles.</p>
                        </li>
                    </ul>
                </div>
                <div className="row">
                        <h2>Six unique character classes: </h2>
                            <p>Each class comes with its own set of skills and abilities that can be upgraded throughout the game.</p>
                            <ul>
                                <li>
                                    <h3>Quantum Mechanics</h3> 
                                    <p>Manipulate time and space to your advantage.</p>    
                                </li>
                                <li>
                                    <h3>Sound Engineering</h3> 
                                    <p>Control sound waves to create powerful sonic attacks.</p>
                                </li>
                                <li>
                                    <h3>Armaments Design</h3>
                                    <p>Craft and wield devastating weapons.</p>
                                </li>
                                <li>
                                    <h3>Circuit Design</h3> 
                                    <p>Harness the power of electricity to shock your enemies.</p>
                                </li>
                                <li>
                                    <h3>DNA Research</h3> 
                                    <p> Alter your genetic makeup for extraordinary abilities.</p>    
                                </li>
                                <li>
                                    <h3>Chemical Engineering</h3> 
                                    <p>Create and utilize deadly chemical concoctions.</p>
                                </li>
                            </ul>   
                </div>
                <div className="row">
                    <h2>Three unique factions: </h2>
                        <p>Each faction comes with its own set of skills and abilities that can be upgraded throughout the game.</p>
                </div>
                <div className="row">
                    <ul>
                        <li>
                            <h3>Brilliant Neptune</h3>
                            <p>Brilliant Neptune is a group of scientists and engineers who have dedicated their lives to the advancement of science and technology. They are a group of brilliant minds who have come together to fight for the greater good.</p>
                        </li>
                        <li>
                            <h3>Evil Corporation</h3>
                            <p>Evil Corporation is a group of scientists and engineers who have dedicated their lives to the advancement of science and technology. They are a group of brilliant minds who have come together to fight for the greater good.</p>
                        </li>
                        <li>
                            <h3>Evil Corporation</h3>
                            <p>Evil Corporation is a group of scientists and engineers who have dedicated their lives to the advancement of science and technology. They are a group of brilliant minds who have come together to fight for the greater good.</p>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <h2>Join the Tech Fighters Universe Today</h2>
                    <p>Are you ready to unleash the power of science? Immerse yourself in the thrilling world of Tech Fighters: Science Unleashed! Join the battle and become the ultimate fighter now!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;