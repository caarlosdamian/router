import React from "react";
import {
 createBrowserRouter,
 createRoutesFromElements,
 Link,
 Outlet,
 Route,
 RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Contact } from "./Contact";
import { Data, fetchData } from "./Data";
import { Home } from "./Home";

function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Root />}>
    <Route index path="/" element={<Home />}  />
    <Route path="data" element={<Data />} loader={fetchData} />
    <Route path="contact" element={<Contact />} />
   </Route>
  )
 );
 return (
  <div className="App">
   <RouterProvider router={router}></RouterProvider>
  </div>
 );
}

export default App;

const Root = () => {
 return (
  <>
   <div className="">
    <Link to={"/"}>Home</Link>
    <Link to="data">Data</Link>
   </div>
   <div className="">
    <Outlet />
   </div>
  </>
 );
};
