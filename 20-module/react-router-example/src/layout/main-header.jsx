import { NavLink } from "react-router-dom"

import classes from './main-header.module.css'

const AcitveNavLink = ({children, ...props}) => {
  return (
    <NavLink {...props} className={(nav) =>
      nav.isActive
      ? classes.active : ''}
    >
      {children}
    </NavLink>
  )
}

export function MainHeader () {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <AcitveNavLink to="/welcome" children='Welcome' />
          </li>
          <li>
           <AcitveNavLink to="/products" children='Products' />
          </li>
        </ul>
      </nav>
    </header>
  )
}
