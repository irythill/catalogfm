import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Catalog.fm</h1>
      <nav>
        <ul className="header-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/bands'>Your Bands / Artists</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header