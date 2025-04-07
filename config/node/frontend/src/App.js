import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./home/Home";
import Map from "./map/Map";
import Services from "./services/Services";
import UnitList from "./militaryUnits/UnitList";
import { units } from "./militaryUnits/mu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services/map",
    element: <Map units={units} />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services/militaryunits",
    element: <UnitList units={units} />,
    errorElement: <h1>Nie działa</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
