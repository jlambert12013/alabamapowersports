import Link from 'next/link'
import Meta from './Meta'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <>
      <Meta />
      <nav className={navStyles.nav}>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
