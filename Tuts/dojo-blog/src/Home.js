const Home = () => {

    const handleClick = () => {
        console.log('Hello, my subordinates');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('Chopper')
            }}>Click Me Again</button>
        </div>
    );
}
 
export default Home;