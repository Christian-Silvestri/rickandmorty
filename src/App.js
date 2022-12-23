import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from "./page/Characters";
import Episode from "./page/Episode";
import Locations from "./page/Locations";
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 4000)
  }, [])



  return (
    <div className="App bg-zinc-800 h-full">
      {!loading ?
        <Router>
          <div className='pb-16 lg:pb-0'>
            <Navbar />
          </div>
          <Routes>
            <Route path={'/rickandmorty'} element={<Characters />} />
            <Route path={'/episode'} element={<Episode />} />
            <Route path={'/location'} element={<Locations />} />
          </Routes>
        </Router>
        :
        <Loader />
      }
    </div>
  );
}


export default App;
