import './Menu.scss';
import Logo from '@/assets/images/logo.svg';
import PlayerVsPlayer from '@/assets/images/player-vs-player.svg';


const Menu = () => {
    return (
        <section className="menu">
            <h2 className='sr-only'>Connect four menu</h2>
            <img src={Logo} alt="" className="menu__icon" />
            <button className="button--primary">
                <span>PLAY VS PLAYER</span>
                <img src={PlayerVsPlayer} alt="" />
            </button>
            <button className="button">GAME RULES</button>
        </section>
    )
}

export default Menu;