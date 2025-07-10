
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import GenderPredictor from './components/GenderPredictor/GenderPredictor';
import Registration from './pages/Registragion/Registration';
import { AgePredictor } from './components/AgePredictor/AgePredictor';
import { Counter } from './components/Counter/Counter';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './layout/MainLayout/MainLayout';
import { ROUTES } from './constants/routes';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <>
    <BrowserRouter>
        
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.REGISTRATION} element={<Registration/>}/>
        <Route path={ROUTES.GENDER} element={<GenderPredictor/>}/>
        <Route path={ROUTES.AGE} element={<AgePredictor/>}/>
        <Route path={ROUTES.COUNTER} element={<Counter/>}/>
        <Route path={ROUTES.ABOUT} element={<AboutUs/>}/>
        <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
