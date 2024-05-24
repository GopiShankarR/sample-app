import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Contact } from './pages/Contact';
import { store } from './store';
import { Login } from './pages/Login';
import { Home } from './pages/Home';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
