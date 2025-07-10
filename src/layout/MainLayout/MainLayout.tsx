import { Link, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import style from "./MainLayout.module.css"

export default function MainLayout() {
  return (
    <div>
        <header>
          <nav>
            <NavBar/>
          </nav>
        </header>
        <div className={style.page}>
          <Outlet/>
        </div>
        <footer>
            <a href="">Instagram</a>
        </footer>
    </div>
  )
}
