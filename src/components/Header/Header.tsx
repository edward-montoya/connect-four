import './Header.scss';
import Logo from '@/assets/images/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <button className="header__button">MENU</button>
            <img className='header__logo' src={Logo} alt="app logo" />
            <button className="header__button">RESTART</button>
        </header>
    );
}

export default Header;