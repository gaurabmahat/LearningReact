import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const like = 50;

  //We cannot output Object or boolean. For ex: we cannot output
  //the person Object created below.
  //const person = { name: 'Usopp', age: 20 };

  const link = "https://duckduckgo.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { like } times</p>

        {/*Cannot ouput the person Object. */}
        {/* <p> { person } </p> */}

        {/*We can output all of the value types as stated
        below. */}
        <p>{ 10 } </p>
        <p>{ "Hello, Usopp"}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }> DuckDuckGo Site</a>

      </div>
    </div>
  );
}

export default App;
