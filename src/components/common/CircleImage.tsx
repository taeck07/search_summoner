import styled from "styled-components";
import { LazyImage } from "./LazyImage";

const CircleImageCover = styled.div<{width: number;}>`
    width: ${props => props.width ? `${props.width}px` : "auto"};
    height: ${props => props.width ? `${props.width}px` : "100%"};
    border-radius: ${props => `${props.width/2}px`};
    overflow: hidden;
`;

export type CircleImageType = {
    src: string;
    width: number;
}

export const CircleImage = ({src, width} : CircleImageType) => {

	return <CircleImageCover width={width}>
		<LazyImage src={src} style={{width: width, height: width}}/>
	</CircleImageCover>;
};