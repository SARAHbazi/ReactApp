import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
