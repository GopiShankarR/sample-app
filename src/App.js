import './App.css';
import { useState } from "react";
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [predictedOutput, setPredictedOutput] = useState(null);

  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedOutput(res.data);
    })
  };

  return (
    <div className='App'>
      <input placeholder='Enter Name' onChange={(event) => setName(event.target.value)}/>
      <button onClick={predictAge}>Predict Age</button>
      <h2>Name: {predictedOutput?.name}</h2>
      <h2>Predicted Age: {predictedOutput?.age}</h2>
      <h2>Count: {predictedOutput?.count}</h2>
    </div>
  );
}

export default App;
