import { useState } from "react";

const Home = () => {

    //let name = 'Usopp';
    const [name, setName] = useState('Usopp');
    const [age, setAge] = useState(19);

    const handleClick = () => {
        setName('Chopper')
        setAge(17)
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;