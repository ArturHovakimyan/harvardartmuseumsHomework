import { fetchHarvardartmuseumsApi } from "slice/harvardartmuseumsData";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Image from "components/Image";
import { useEffect } from "react";
import { URL } from "app/appURL";
import "App.css";
import { createImage } from "slice/imagesSlice";

let pageCount = 1;

function App() {
	const harvardartmuseumsData = useAppSelector(
		(state) => state.harvardartmuseumsData.harvardartmuseumsData
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getStorage = sessionStorage.getItem("count");
		if (getStorage) {
			dispatch(fetchHarvardartmuseumsApi(`${URL}&page=${getStorage}`));
			pageCount = +getStorage;
		} else {
			dispatch(fetchHarvardartmuseumsApi(`${URL}&page=${pageCount}`));
		}
	}, [dispatch]);

	const handleShouMore = () => {
		pageCount++;
		sessionStorage.setItem("count", `${pageCount}`);
		const getStorage = sessionStorage.getItem("count");
		dispatch(fetchHarvardartmuseumsApi(`${URL}&page=${getStorage}`));
		window.scrollTo(0, 0);
	};
	const handleShouLes = () => {
		pageCount--;
		sessionStorage.setItem("count", `${pageCount}`);
		const getStorage = sessionStorage.getItem("count");
		dispatch(fetchHarvardartmuseumsApi(`${URL}&page=${getStorage}`));
		window.scrollTo(0, 0);
	};
	const handleFirstImages = (id: number) => {
		const element = harvardartmuseumsData.records.find(
			(item) => item["id"] === id
		);
		dispatch(createImage(element));
	};

	return (
		<div className="App_contener">
			<div className="App">
				{harvardartmuseumsData.records.map((item) => (
					<Image
						key={item["id"]}
						primaryimageurl={item["primaryimageurl"]}
						id={item["id"]}
						title={item["title"]}
						handleFirstImages={handleFirstImages}
					/>
				))}
			</div>
			<div className="App-button-div">
				<button
					disabled={pageCount === 1 ? true : false}
					onClick={handleShouLes}
				>
					{"< Shou less"}
				</button>
				{pageCount}
				<button onClick={handleShouMore}>{"Show more >"}</button>
			</div>
		</div>
	);
}

export default App;
