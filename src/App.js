import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/pages/Rockets';
import Mission from './components/pages/Mission';

const App = () => (
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

export default App;
