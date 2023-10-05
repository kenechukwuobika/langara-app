import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import IconOpenMenu from '../assets/icons/Icon-material-menu.svg';

function Header() {

    const [sticky, setSticky] = useState('');
    const [active, setActive] = useState(false);
    const headerRef = useRef(null)
    const location = useLocation();
    console.log(location)
    
    const links = [
        {
            name: "home",
            path: '/'
        },
        {
            name: "introduction",
            path: '/introduction'
        },
        {
            name: 'our team',
            path: '/team'
        },
        {
            name: 'events',
            path: '/#events'
        }
    ]
    
    const displayLinks = () => (
        links.map((link, index) => {

            const { name, path, type } = link;

            const linkProps = {
                onClick: () => setActive(false),
                className: 'nav__link',
                to: path
            }

            const isHash = path.includes('#');
            const LinkComponent = isHash ? HashLink : Link

            return (
                <li key={index} className='nav__item'>
                    <LinkComponent
                        {...linkProps}
                    >
                        {name}
                    </LinkComponent>
                </li>
            )
        })
    )

    const triggerSticky = () => {
        if (window.scrollY > headerRef.current.offsetTop) {
           setSticky('header__sticky');
        } 
        else {
            setSticky('');
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            triggerSticky();
        };
    }, []);

    const openMenu = () => {
        setActive(true);
    }

    return (
        <header className={`header ${sticky}`} id='header' ref={headerRef}>
            <div className='row'>
                <div className='container'>
                    <nav className='nav'>
                        <div className="nav__right">
                            <img 
                                onClick={openMenu}
                                src={IconOpenMenu}
                                className="nav__menu"
                                alt="nav menu icon"
                            />
    
                            <ul className={`nav__list ${active ? 'nav__list--open' : ''}`}>
                                {displayLinks()}
                            </ul>
                        </div>

                        <div className='nav__cta--container'>
                            <Link className="nav__cta" to="mailto:email@example.com">Contact us</Link>
                            <Link className="nav__cta--link" to="/app">Dashboard</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
