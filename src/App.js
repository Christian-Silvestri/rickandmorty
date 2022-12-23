
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from "./page/Characters";
import Episode from "./page/Episode";
import Locations from "./page/Locations";
import Navbar from './components/Navbar';

function App() {



  return (
    <div className="App bg-zinc-800 h-full">
      <Router>
        <div className='pb-16 lg:pb-0'>
          <Navbar />
        </div>
        <Routes>

          <Route path={'/characters'} element={<Characters />} />
          <Route path={'/episode'} element={<Episode />} />
          <Route path={'/location'} element={<Locations />} />

        </Routes>
      </Router>

      {/* <Characters /> */}

      {/* <Episode /> */}
      {/*  <Locations /> */}

    </div>
  );
}

export default App;
