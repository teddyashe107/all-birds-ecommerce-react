import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'
import { lazy } from 'react';

const Home = lazy(() => import('pages/home'))
const Products = lazy(() => import('pages/products'))
const ErrorPage = lazy(() => import('../error-page'))

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
            {
                path: '/rerun',
                errorElement: <ErrorPage />
            }
		],
	},
]);


const Provider = () => {
	return <RouterProvider router={router} />;
};

export default Provider
