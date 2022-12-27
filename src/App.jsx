import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Debug from "./pages/Debug";

function App() {
  return (
    <div className="App w-screen h-screen overflow-hidden overflow-y-scroll">
      <Routes>
        <Route path="/debug" element={<Debug />} />
        <Route path="/" exact element={<Landing />} />
        <Route path="*" element={<div>not_found</div>} />
      </Routes>
    </div>
  );
}

export default App;
