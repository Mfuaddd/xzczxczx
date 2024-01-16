import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
