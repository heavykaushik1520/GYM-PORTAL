import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateMember from "./component/memberComponent/CreateMember";
import GetAllMember from "./component/memberComponent/GetAllMember";
import "./style/bg.css";
import UpdateMember from "./component/memberComponent/UpdateMember";
import CreateTrainer from "./component/trainerComponent/CreateTrainer";
import UpdateTrainer from "./component/trainerComponent/UpdateTrainer";
import GetAllTrainers from "./component/trainerComponent/GetAllTrainers";
import ViewMemberById from "./component/memberComponent/ViewMemberById";
import SearchByName from "./component/memberComponent/SearchByName";
import SearchByTrainerName from "./component/trainerComponent/SearchByTrainerName";
import ViewReview from "./component/reviewComponent/ViewReview";
import WriteReview from "./component/reviewComponent/WriteReview";
import UpdateReview from "./component/reviewComponent/UpdateReview";
import LoginPage from "./component/loginPage/LoginPage";
import Navbar2 from "./component/navbar/Navbar2";
import GetTrainersSortedByExperience from "./component/trainerComponent/SortTrainerByExp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/create-member", element: <CreateMember /> },
      { path: "/all-members", element: <GetAllMember /> },
      { path: "/update-member/:id", element: <UpdateMember /> },
      { path: "/create-trainer", element: <CreateTrainer /> },
      { path: "/update-trainer/:id", element: <UpdateTrainer /> },
      { path: "/all-trainers", element: <GetAllTrainers /> },
      { path: "/view-member/:id", element: <ViewMemberById /> },
      { path: "/search-by-member", element: <SearchByName /> },
      { path: "/search-by-trainer", element: <SearchByTrainerName /> },
      { path: "/create-review/:id", element: <WriteReview /> },
      { path: "/view-review", element: <ViewReview /> },
      { path: "/update-review/:id", element :<UpdateReview/>},
      {path : "/sort-trainer-by-exp", element : <GetTrainersSortedByExperience/>}
      // { path: "/navbar", element :<Navbar2/>},
      
     

      // { path: 'edit-member/:id', element: <EditMember /> },
      // { path: 'delete-member/:id', element: <DeleteMember /> },
    ],
  },
]);


// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />, // Default to LoginPage
//   },
//   {
//     path: "/admin",
//     element: <App />, // App component with Navbar
//     children: [
//       { path: "create-member", element: <CreateMember /> },
//       { path: "all-members", element: <GetAllMember /> },
//       { path: "update-member/:id", element: <UpdateMember /> },
//       { path: "create-trainer", element: <CreateTrainer /> },
//       { path: "update-trainer/:id", element: <UpdateTrainer /> },
//       { path: "all-trainers", element: <GetAllTrainers /> },
//       { path: "view-member/:id", element: <ViewMemberById /> },
//       { path: "search-by-member", element: <SearchByName /> },
//       { path: "search-by-trainer", element: <SearchByTrainerName /> },
//       { path: "create-review/:id", element: <WriteReview /> },
//       { path: "view-review", element: <ViewReview /> },
//       { path: "update-review/:id", element: <UpdateReview /> },
//     ],
//   },
// ]);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}></RouterProvider>);
