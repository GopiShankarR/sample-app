import './App.css';

function App() {
  const name = <h1>Gopi</h1>;
  const age = <h2>23</h2>;
  const user = (<div>
    {name}
    {age}
  </div>);
  return (
    <div className="App">
      {user}
    </div>
  );
}

export default App;
