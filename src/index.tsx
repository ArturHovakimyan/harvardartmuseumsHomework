import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import router from "router";
import React from "react";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
