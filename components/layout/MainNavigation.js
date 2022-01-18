import classes from "./MainNavigation.module.css"

import Link from "next/link"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Forum App</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Dicsuccions</Link>
          </li>
          <li>
            <Link href='/new-discussion'>Add New Discussion</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
