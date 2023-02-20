import React, { useEffect, useState } from "react";

export const useFocus = (ref:React.MutableRefObject<HTMLInputElement | null>) => {
	const [isFocus, setIsFocus] = useState(false);
	useEffect(() => {
		const handleFocus = () => {
			setIsFocus(true);
		};
		const handleBlur = () => {
			setIsFocus(false);
		};
		ref.current?.addEventListener("focus",handleFocus);
		ref.current?.addEventListener("blur",handleBlur);
		return () => {
			ref.current?.removeEventListener("focus",handleFocus);
			ref.current?.removeEventListener("blur",handleBlur);
		};
	},[]);
	return [isFocus, setIsFocus];
};