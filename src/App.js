import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mission from './pages/Mission';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <header className="App-header"> */}
        <Navigation />
        {/* </header> */}
        <Routes>
          <Route path="/missions" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
