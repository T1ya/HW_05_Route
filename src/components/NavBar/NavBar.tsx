import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

export default function NavBar() {
  return (
    <div>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.REGISTRATION}>Register</Link>
        <Link to={ROUTES.GENDER}>Gender predictor</Link>
        <Link to={ROUTES.AGE}>Age predictor</Link>
        <Link to={ROUTES.COUNTER}>Counter</Link>
    </div>
  )
}
