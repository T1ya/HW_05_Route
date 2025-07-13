import { NavLink, Outlet } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export const AccLayout = () => {
  return <>
  <nav>
    <NavLink to={ROUTES.ACCSETTINGS}>Account settings</NavLink>
    <NavLink to={ROUTES.ACCINFO}>Account info</NavLink>
  </nav>
  <Outlet/>
  </>
}
