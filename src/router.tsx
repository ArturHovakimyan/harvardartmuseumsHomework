import { createBrowserRouter } from "react-router-dom";
import ImageList from "components/ImageList";
import App from "App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/home",
		element: <App />,
	},
	{
		path: "image/list/:id",
		element: <ImageList />,
	},
]);

export default router;
