import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Header.scss';
import Logo from '/assets/images/logo.svg';

const Header = ({ restart, pauseGame, continueGame, quitGame } : { restart: () => void, pauseGame: () => void, continueGame: () => void, quitGame: () => void }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const menuOption = () => {
        pauseGame();
        setModalOpen(true);
    };

    const continueHeader = () => {
        continueGame();
        setModalOpen(false);
    }

    const restartOption = () => {
        restart();
        setModalOpen(false);
    }

    return (
        <header className="header">
            <button onClick={menuOption} className="header__button">MENU</button>
            {
                modalOpen ? (
                    <Modal title='PAUSE'>
                        <div className='header__modal-content'>
                            <button onClick={continueHeader} className='header__modal-button' >CONTINUE GAME</button>
                            <button className='header__modal-button' onClick={restartOption} >RESTART</button>
                            <button className='header__modal-button--quit' onClick={quitGame}>QUIT GAME</button>
                        </div>
                    </Modal>
                ) :
                    <></>
            }
            <img className='header__logo' src={Logo} alt="app logo" />
            <button onClick={restart} className="header__button">RESTART</button>
        </header>
    );
}

export default Header;