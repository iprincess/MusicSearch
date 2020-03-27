import './Audio.scss';
import React from 'react';
import { PreviewIcon } from '../../icons/Icons';

export const Audio = (props:IAudioProps) => {
	const audioRef = React.createRef<HTMLAudioElement>();
	let isPlaying = false;
	
	const onClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		
		props.onAudioClick(audioRef);
		
		if(!isPlaying){
			audioRef.current.play();
			isPlaying = true;
		} else {
			audioRef.current.pause();
			isPlaying = false;
		}
		
	}

	return (
		<div className="audio">
			<span className="preview" onClick={onClick}>
				<PreviewIcon /> Preview
			</span>
			<audio ref={audioRef} src={props.url} preload="none">TThis browser does not support previews</audio>
		</div>
  );
};