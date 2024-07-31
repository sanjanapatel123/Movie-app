import Home from "./pages/Home";
import Singlemovie from "./pages/Singlemovie";
import Error from "./pages/Error";
import Rootlayout from "./pages/Rootlayout";
import { loader as MovieLoader } from "./pages/Home";
import { loader as singlePage } from "./pages/Singlemovie";
import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />} errorElement={<Error></Error>}>
      <Route index loader={MovieLoader} element={<Home></Home>} />
      <Route
        path="/detail/:imdbId"
        loader={singlePage}
        element={<Singlemovie></Singlemovie>}
      ></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
