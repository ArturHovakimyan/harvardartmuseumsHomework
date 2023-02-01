export interface IImages {
	imageid: number;
	baseimageurl: string;
	handleNextFoto: (index:number) => void
}
const DrawImages = ({ baseimageurl, handleNextFoto,imageid }: IImages) => {
	return (
		<div className="images-contener" onClick={() => handleNextFoto(imageid)}>
			<img className="image-image" src={baseimageurl} alt="" />
		</div>
	);
};

export default DrawImages;
