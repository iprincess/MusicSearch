interface IMediaCardProps {
	imageSrc?: string;
    imageAlt?: string;
    title: string;
    text?: string;
    buttonText: string;
    link: string;
    audioFileUrl?: string;
    onAudioClick?: IAudioClick;
}