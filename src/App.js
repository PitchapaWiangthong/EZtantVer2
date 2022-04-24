import React from "react";
import Error from "./Page/Error/Error";
import TA_detail from "./Page/TA-detail/TA_detail";
import Home from "./Page/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="absolute">
        <Link to="/error">หน้า error</Link>
        <Link to="/detail_TA">หน้า TA detail</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/error" element={<Error />} />
        <Route path="/detail_TA" element={<TA_detail />} />
      </Routes>
    </div>
  );
}

export default App;
