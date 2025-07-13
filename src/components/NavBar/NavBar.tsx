import { ROUTES } from '../../constants/routes'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive: styles.navLink;
  };

  return (
    <div className={styles.navbar}>
        <NavLink to={ROUTES.HOME} className={classSelector}>Home</NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>Register</NavLink>
        <NavLink to={ROUTES.GENDER} className={classSelector}>Gender predictor</NavLink>
        {/* <NavLink to= {ROUTES.AGE} className={classSelector}>Age predictor</NavLink> */}
        <NavLink to={ROUTES.COUNTER} className={classSelector}>Counter</NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>About us</NavLink>
        <NavLink to={ROUTES.CONTACTS} className={classSelector}>Contacts</NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>Account</NavLink>
        <NavLink to={ROUTES.PRODUCT} className={classSelector}>Products</NavLink>
        <NavLink to={ROUTES.USERLIST} className={classSelector}>User list</NavLink>
    </div>
  )
}
