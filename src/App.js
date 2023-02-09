import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/pages/Rockets';

const App = () => (
  <>
    <header className="App-header">
      <Navigation />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </main>
  </>
);

export default App;
