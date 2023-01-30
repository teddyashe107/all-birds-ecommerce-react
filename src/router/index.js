import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../error-page';
import Home from 'pages/home';
import Products from 'pages/products';
import App from '../App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
			},
		],
	},
]);


const Provider = () => {
	return <RouterProvider router={router} />;
};

export default Provider
