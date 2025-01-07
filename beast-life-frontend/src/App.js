import { Outlet } from "react-router-dom";
// import CreateMember from "./component/memberComponent/CreateMember";
// import GetAllMember from "./component/memberComponent/GetAllMember";
import Navbar2 from "./component/navbar/Navbar2";
import './style/bg.css'
import HomeComponent from "./component/homeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      {/* <CreateMember />
      <GetAllMember/> */}
      <Navbar2/>
      <Outlet/>
      {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
