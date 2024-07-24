import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SimulatePage from './components/SimulatePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Alm from './components/Alm';
import Theory from './components/Theory';
import Pretest from './components/Pretest';
import Procedure from './components/Procedure';
import Posttest from './components/Posttest';
import Reference from './components/Reference';
import Feedback from './components/Feedback';
import HalfSimulate1 from './components/HalfSimulate1';
import FullSimulate1 from './components/FullSimulate1';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/alm' element={<Alm />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/pretest' element={<Pretest />} />
        <Route path='/procedure' element={<Procedure />} />
        <Route path='/' exact element={<SimulatePage />}>
          <Route path='halfadder' element={<HalfSimulate1 />} />
          <Route path='fulladder' element={<FullSimulate1 />} />
        </Route>
        <Route path='/posttest' exact element={<Posttest />} />
        <Route path='/reference' exact element={<Reference />} />
        <Route path='/feedback' exact element={<Feedback />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
