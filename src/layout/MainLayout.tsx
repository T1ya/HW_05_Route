import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function MainLayout() {
  return (
    <div>
        <header>
          <nav>
            <NavBar/>
          </nav>
        </header>
        <Outlet/>
        <footer>
            <a href="">Instagram</a>
        </footer>
    </div>
  )
}
