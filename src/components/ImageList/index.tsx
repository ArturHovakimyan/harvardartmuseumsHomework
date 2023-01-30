import { useAppSelector } from "app/hooks";
import DrawImages from "./DrawImages";

const ImageList = () => {
	const image = useAppSelector(state => state.images.images)
	return (
		<div>
			{image.map((item) => (
				<DrawImages
					key={item["imageid"]}
					imageid={item["imageid"]}
					description={item["description"]}
					baseimageurl={item["baseimageurl"]}
				/>
			))}
		</div>
	);
};

export default ImageList;
