import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mission from './components/pages/Mission';
import Rockets from './components/pages/Rockets';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Routes>
           <Route path="/" element={<Rockets />} />
           <Route path="/missions" element={<Mission />} />
         </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
