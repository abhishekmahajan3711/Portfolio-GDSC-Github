import Landing from "./Landing";
import PhotoPage from "./PhotoPage";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/PhotoPage" element={<PhotoPage />} />
        <Route path="/PhotoPage/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
