import { useAppDispatch } from "app/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IImages } from "components/ImageList/DrawImages";
import { createImage } from "slice/imagesSlice";

export interface IRecords {
	id: number;
	title: string;
	images: IImages[];
	primaryimageurl: string;
}

const Image = ({ primaryimageurl, images, title, id }: IRecords) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const handleNavigateImage = () => {
		navigate(`image/list/${id}`);
		dispatch(createImage(images));
	};
	return (
		<div onClick={handleNavigateImage} className="App-contener" id={String(id)}>
			<img className="App-image" src={primaryimageurl} alt="" />
			<span>{title}</span>
		</div>
	);
};

export default Image;
