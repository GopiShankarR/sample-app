import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className='App'>
      <Person name="Gopi" email="g@gmail.com" age={25} isMarried={false} friends={["Mike", "Vince", "Gop"]} />
    </div>
  );
}

export default App;
