import React from "react";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Contact />
    </div>
  );
};

export default App;
