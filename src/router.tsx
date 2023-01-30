import App from "App";
import ImageList from "components/ImageList";
import { createBrowserRouter } from "react-router-dom";

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
