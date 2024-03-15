import React, { useMemo } from 'react';
import './Player.scss'; 

const Player = ({ playerName, score, playerImage, imagePosition }: { playerName: string, score: number, playerImage: string, imagePosition: string }) => {
  
  const styles = useMemo(() => {    
    const values = {
      top: 'auto',
      bottom: 'auto',
      right: 'auto',
      left: 'auto',
    };
    if (imagePosition === 'up') {
      values.top = '-30px';
    }
    if (imagePosition === 'down') {
      values.bottom = '-30px';
    }
    if (imagePosition === 'left') {
      values.left = '-30px';
    }
    if (imagePosition === 'right') {
      values.right = '-30px';
    }
    return {
      ...values
    } as React.CSSProperties;
  }, [imagePosition])
  
  return (
        <article className="player">
          <p className="player__title">{ playerName }</p>
          <p className="player__score">{ score }</p>
          <img style={styles} className='player__image' src={playerImage} alt={`player ${playerName}`}></img>
        </article>
    );
}

export default Player;