import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Overview from "./Components/Overview/Overview";
import React from "react";

function App() {
  return (
    <div dir="rtl" style={{ height: "100%" }}>
      <Routes>
        <Route path="/health-care-info" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
