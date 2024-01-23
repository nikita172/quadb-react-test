
import './App.css'
import DescScreen from './pages/descScreen/DescScreen';
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/description",
    element: <DescScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
