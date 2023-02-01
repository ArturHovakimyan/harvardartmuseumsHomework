import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState } from "react";
import DrawImages from "./DrawImages";

const ImageList = () => {
	const image = useAppSelector((state) => state.images.regularElement);
	const dispatch = useAppDispatch()
	const [firstImage, setFirstImage] = useState(image["primaryimageurl"]);
	const handleNextFoto = (imageid: number) => {
		const el = image["images"].find((item) => item["imageid"] === imageid);
		if(el){
			setFirstImage(el["baseimageurl"]);
		}
	};
	return (
		<div>
			<div className="image-first-box">
				<img className="image-first" src={firstImage} alt="" />
				<span>{image["description"]}</span>
			</div>
			<div className="images">
				{image["images"].map((item) => (
					<DrawImages
						key={item["imageid"]}
						imageid={item["imageid"]}
						baseimageurl={item["baseimageurl"]}
						handleNextFoto={handleNextFoto}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageList;
