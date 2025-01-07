// import React from "react";
// import { Link } from "react-router-dom";

// import "./navbar.css";

// export default function Navbar2() {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-title">BEAST LIFE</div>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/" className="navbar-link">
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link to="/create-member" className="navbar-link">
//               CREATE MEMBERS
//             </Link>
//           </li>
//           <li>
//             <Link to="/all-members" className="navbar-link">
//               SHOW MEMBERS
//             </Link>
//           </li>
//           <li>
//             <Link to="/create-trainer" className="navbar-link">
//               CREATE TRAINER
//             </Link>
//           </li>
//           <li>
//             <Link to="/all-trainers" className="navbar-link">
//               SHOW TRAINERS
//             </Link>
//           </li>
//           {/* <li><Link to="/view-member/:id" className="navbar-link">VIEW MEMBERS</Link></li> */}
//           <li>
//             <Link to="/search-by-member" className="navbar-link">SEARCH MEMBER</Link>
//           </li>
//           <li>
//             <Link to="/search-by-trainer" className="navbar-link">SEARCH TRAINER</Link>
//           </li>

//           {/* <li><Link to="/update-member/:id" className="navbar-link">UPDATE MEMBER</Link></li> */}
//         </ul>
//       </nav>
//     </>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar2() {
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);
  const [isTrainerDropdownOpen, setIsTrainerDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">BEAST LIFE</div>
      <ul className="navbar-links">
        {/* <li>
          <Link to="/log-in" className="navbar-link">
            LOGIN
          </Link>
        </li>

        <li>
          <Link to="/public-site" className="navbar-link">
            PUBLIC
          </Link>
        </li> */}
        

        {/* Member Dropdown */}
        <li
          className="navbar-dropdown"
          onMouseEnter={() => setIsMemberDropdownOpen(true)}
          onMouseLeave={() => setIsMemberDropdownOpen(false)}
        >
          <span className="navbar-link">MEMBER</span>
          {isMemberDropdownOpen && (
            <ul className="dropdown-menu">
              {/* <li>
                <Link to="create-member" className="dropdown-link">
                  CREATE 
                </Link>
              </li> */}
              <li>
                <Link to="all-members" className="dropdown-link">
                  SHOW
                </Link>
              </li>
              <li>
                <Link to="search-by-member" className="dropdown-link">
                  SEARCH
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Trainer Dropdown */}
        <li
          className="navbar-dropdown"
          onMouseEnter={() => setIsTrainerDropdownOpen(true)}
          onMouseLeave={() => setIsTrainerDropdownOpen(false)}
        >
          <span className="navbar-link">TRAINER</span>
          {isTrainerDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="create-trainer" className="dropdown-link">
                  CREATE
                </Link>
              </li>
              <li>
                <Link to="all-trainers" className="dropdown-link">
                  SHOW
                </Link>
              </li>
              <li>
                <Link to="search-by-trainer" className="dropdown-link">
                  SEARCH
                </Link>
              </li>
              {/* <li>
                <Link to="sort-trainer-by-exp" className="dropdown-link">
                  SORT
                </Link>
              </li> */}
              
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

