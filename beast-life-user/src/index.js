import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WriteReview from "./component/reviewComponent/WriteReview";
import UpdateReview from "./component/reviewComponent/UpdateReview";
import Loginn from "./component/login/LogInn";
import SignUp from "./component/signUp/SignUp";
import PublicSite from "./component/publicSite/PublicSite";
// import MemberDashboard from "./component/memberComponent/GetByIdMember";
import MemberDashboard2 from "./component/memberComponent/MemberDashboard";
import GetAllTrainers from "./component/trainerComponent/GetAllTrainers";
import GetTrainersSortedByExperience from "./component/trainerComponent/SortTrainerByExp";
import SearchByTrainerName from "./component/trainerComponent/SearchByTrainerName";
import PaginatedReviews from "./component/reviewComponent/PaginatedReviews";
import UpdateMember from "./component/memberComponent/UpdateMember";
import AllMembers from "./component/memberComponent/GetAllMember";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path : "/home" , element : <PublicSite/>},
      { path: "/create-review/:id", element: <WriteReview /> },
      // { path: "/view-review", element:<GetAllReview/>},
      { path: "/update-review/:id", element: <UpdateReview /> },
      { path: "/log-in", element: <Loginn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/member-dashboard" , element : <MemberDashboard2/>},
      { path : "/all-trainers", element : <GetAllTrainers/>},
      { path : "/sort-trainers", element : <GetTrainersSortedByExperience/>},
      { path : "/search-trainer", element : <SearchByTrainerName/>},
      {path : "/view-review", element : <PaginatedReviews/>},
      {path : "/update-member/:id" , element : <UpdateMember/>},
      {path : "/all-members" , element : <AllMembers/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
