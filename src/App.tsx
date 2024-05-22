// import Labs from "./Labs";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Navigate to="Labs" />} />
//           <Route path="/Labs/*" element={<Labs />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }
// export default App;

import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import LandingPage from './LandingPage';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="LandingPage" />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

