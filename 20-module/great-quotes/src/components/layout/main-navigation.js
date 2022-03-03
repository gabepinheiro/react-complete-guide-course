import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation () {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to='/quotes'
              activeClassName={classes.active}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-quote'
              activeClassName={classes.active}
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
