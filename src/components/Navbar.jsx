import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import Logo from '../images/logo.png';
import './navbar.css';

const Navbar = () => {
  const [issActive, setIssActive] = useState(false);

  const handleHambergur = event => {
    setIssActive(current => !current);
  };
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo'>
          <img src={Logo} onClick={() => setIssActive(current => !current)} alt="Nav Logo" />
        </Link>
        <ul className={issActive ? 'nav__links active' : 'nav__links'}>
          {
            links.map(({name, path, exact}, index) => {
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className = {issActive ? 'nav__toggle-btn active' : 'nav__toggle-btn'} onClick={handleHambergur}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar