import React from "react";

export interface IImages {
	imageid: number;
	description: string;
	baseimageurl: string;
}
const DrawImages = ({ baseimageurl, description, imageid }: IImages) => {
	return (
		<div className="App-contener">
			<img className="App-image" src={baseimageurl} alt="" />
			<span>{description}</span>
		</div>
	);
};

export default DrawImages;
