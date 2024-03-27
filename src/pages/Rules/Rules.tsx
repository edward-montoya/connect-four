import { Link } from 'react-router-dom';
import './Rules.scss';
import IconCheck from '/assets/images/icon-check.svg';

const Rules = () => {
    return (
        <section className="rules">
            <h2 className='rules__title'>RULES</h2>
            <article>
                <h3 className='rules__subtitle'>OBJECTIVE</h3>
                <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            </article>
            <article>
                <h3 className='rules__subtitle'>HOW TO PLAY</h3>
                <ol className='rules__list'>
                    <li>Red goes first in the first game.</li>
                    <li>Players must alternate turns, and only one disc can be dropped in each turn. </li>
                    <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                    <li>The starter of the previous game goes second on the next game.</li>
                </ol>
            </article>
            <Link className='rules__check' to="/">
                <img src={IconCheck} alt='check image' />
            </Link>
        </section>
    )
}

export default Rules;