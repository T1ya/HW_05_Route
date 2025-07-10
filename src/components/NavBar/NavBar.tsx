import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.REGISTRATION}>Register</Link>
        <Link to={ROUTES.GENDER}>Gender predictor</Link>
        <Link to={ROUTES.AGE}>Age predictor</Link>
        <Link to={ROUTES.COUNTER}>Counter</Link>
        <Link to={ROUTES.ABOUT}>About us</Link>
        <Link to={ROUTES.CONTACTS}>Contacts</Link>
    </div>
  )
}
