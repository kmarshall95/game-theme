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
                    <p>In this open-world beat-em-up game, players will have the opportunity to master the latest technology and harness the power of science to take on an array of enemies and challenges.</p>
                    <p>Players will be able to choose from a variety of characters, each with their own unique abilities and fighting styles, and will be able to customize their characters to suit their play style.</p>
                    <p>Players will be able to explore a variety of environments, from the bustling city streets to the depths of the ocean, and will be able to take on a variety of missions, from fighting off waves of enemies to taking on the final boss.</p>
                    <p>Players will be able to take on the role of a hero, or they can choose to take on the role of a villain, and will be able to choose from a variety of different factions, each with their own unique abilities and fighting styles.</p>
                    <p>Players will have the ability to choose from six unique classes: Quantum Mechanics, Sound Engineering, Armaments Design, Circuit Design, DNA Research, and Chemical Engineering. Each class comes with its own set of skills and abilities that can be upgraded throughout the game.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;