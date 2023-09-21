import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import { Root } from './pages/Root';
import { Dashboard, loader as dashboardLoader } from './pages/Dashboard';
import { ViewTest, loader as testLoader } from './pages/ViewTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: 'test/:testId',
        element: <ViewTest />,
        loader: testLoader,
      },
    ]
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}
