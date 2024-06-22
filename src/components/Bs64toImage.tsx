interface Bs64toImageProps {
	base64String: string;
}

const Bs64toImage: React.FC<Bs64toImageProps> = ({ base64String }) => {
	const imageSrc = `data:image/png;base64,${base64String}`;

	return <img src={imageSrc} alt="Base64 Image" />;
};

export default Bs64toImage;
