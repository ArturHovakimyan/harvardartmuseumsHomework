import { useNavigate } from "react-router-dom";

export interface IRecords {
	id: number;
	title: string;
	primaryimageurl: string;
	handleFirstImages: (id:number) => void;
}

const Image = ({ primaryimageurl, handleFirstImages, title, id }: IRecords) => {
	const navigate = useNavigate();
	const handleNavigateImage = () => {
		navigate(`image/list/${id}`);
		handleFirstImages(id)
	};
	return (
		<div onClick={handleNavigateImage} className="App-contener" id={String(id)}>
			<img className="App-image" src={primaryimageurl} alt="" />
			<span>{title}</span>
		</div>
	);
};

export default Image;
