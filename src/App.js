import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './components/Form';

export const AppContext = createContext();

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }});
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h2>THE PAGE YOU ARE SEARCHING IS NOT FOUND</h2>} />
            </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App;
