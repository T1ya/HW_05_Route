import { ROUTES } from "../constants/routes";
import MainLayout from "../layout/MainLayout/MainLayout";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import GenderPredictor from "../components/GenderPredictor/GenderPredictor";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <div>
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
    </div>
  )
}
