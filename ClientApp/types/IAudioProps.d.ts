interface IAudioProps {
	url:string; 
	onAudioClick: IAudioClick;
}

type IAudioClick = (audioRef:React.RefObject<HTMLAudioElement>) => void;