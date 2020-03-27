import './MediaCard.scss';
import React from 'react';
import { Audio } from '../audio/Audio';

export const MediaCard = (props:IMediaCardProps) => {
  return (
    <a href={props.link} className="card card-clickable flex-container flex-col ">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className="card-body">
        {props.audioFileUrl && <Audio onAudioClick={props.onAudioClick} url={props.audioFileUrl} />}
        <p className="card-title">{props.title}</p>
        {props.audioFileUrl && <p className="card-text">{props.text}</p>}
      </div>
    </a>
  );
}

export default MediaCard;
