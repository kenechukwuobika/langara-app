import { Link } from 'react-router-dom';
import IconMenu from '../assets/icons/Icon-material-menu.svg';

function Header() {
    return (
        <header className='header'>
            <div className='row'>
                <div className='container'>
                    <nav className='nav'>
                        <div className="nav__right">
                            <img src={IconMenu} className="nav__menu" alt="nav menu icon" />
    
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <Link className='nav__link' to='/'>Home</Link>
                                </li>
                                <li className='nav__item'>
                                    <Link className='nav__link' to='/introduction'>Research</Link>
                                </li>
                                <li className='nav__item'>
                                    <Link className='nav__link' to='/team'>Our team</Link>
                                </li>
                                <li className='nav__item'>
                                    <Link className='nav__link' to='#'>Events</Link>
                                </li>
                            </ul>
                        </div>

                        <Link className="nav__cta" to="mailto:email@example.com">Contact us</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
