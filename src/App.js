import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MissionTable from './components/pages/MissionTable';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/Profile';

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
            <Route path="/missions" element={<MissionTable />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
