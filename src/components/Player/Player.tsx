import './Player.scss';

const Player = ({ playerName, score }: { playerName: string, score: number }) => {
    return (
        <article className="player">
          <p className="player__title">{ playerName }</p>
          <p className="player__score">{ score }</p>
        </article>
    );
}

export default Player;