import React from 'react';
import Body from './components/Body';
import Characterbody from './components/characterbody';
import { characters } from './content/characters';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import AboutPage from './pages/About';
import CharactersPage from './pages/Characters';
import ContactPage from './pages/Contact';
import MissionsPage from './pages/Missions';
import OurTeamPage from './pages/ourteam';
import RoadmapPage from './pages/roadmap';
import HomePage from './pages/Home';
import Nopage from './pages/nopage';


const App = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/missions" element={<MissionsPage />} />
                <Route path="/roadmap" element={<RoadmapPage />} />
                <Route path="/our team" element={<OurTeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {characters.map((character, index) => (
                    <Route path={`/character/${character.Character_Name}`} element={<Characterbody value={character} />} />
                ))}
                <Route path="*" element={<Nopage />} />
            </Routes>
    );
    }

export default App;