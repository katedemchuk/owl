import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import { Root } from './pages/Root';
import { Dashboard, loader as dashboardLoader } from './pages/Dashboard';
import { ViewTest, loader as testLoader } from './pages/ViewTest';
import { CreateTest, action as createTestAction } from './pages/CreateTest';
import { QuestionForm, action as createQuestionAction } from './components/QuestionForm';

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
        children: [
          {
            path: 'create-question',
            element: <QuestionForm />,
            action: createQuestionAction,
          }
        ]
      },
      {
        path: 'create-test',
        element: <CreateTest />,
        action: createTestAction,
      },
    ]
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}
