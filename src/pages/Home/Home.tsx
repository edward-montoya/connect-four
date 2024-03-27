import './Home.scss'

import Logo from '/assets/images/logo.svg';
import IconPlayerVsPlayer from '/assets/images/player-vs-player.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <div className='home__container'>
                <h2 className='sr-only'>Home page</h2>
                <img className='home__logo' src={Logo} alt="app logo" />
                <Link className='home__button' to="/game">
                    <span>PLAYER VS PLAYER</span>
                    <img src={IconPlayerVsPlayer} alt='' />
                </Link>
                <Link className='home__button' to="/rules">
                    GAME RULES
                </Link>
            </div>
        </section>
    )
}

export default Home;