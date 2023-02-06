import Card from '../components/card';
import { characters } from '../content/characters';


const Characters = () => {
    return (
        <div className="characters">
            <h1>Characters</h1>
            <Card characters={characters} />
        </div>
    );
}

export default Characters;