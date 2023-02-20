import { useEffect, useRef, useState } from "react";

export interface LazyImagePropTypes {
    src: string;
    style?: React.CSSProperties;
    loadingImage?: string;
  }


const LazyImage = ({ src, style, loadingImage = "" }: LazyImagePropTypes) => {
	const [imgUrl, setImgUrl] = useState(loadingImage);
	const imgRef = useRef<HTMLImageElement>(null);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver(intersectionOberserver);
		if (imgRef.current) observer.current.observe(imgRef.current);
	}, []);

	const intersectionOberserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				io.unobserve(entry.target);
				setImgUrl(src);
			}
		});
	};

	const handleError = () => {
		setImgUrl(loadingImage);
	};

	return <img ref={imgRef} src={imgUrl} style={style} alt="car" onError={() => handleError()} />;
};

export {LazyImage};