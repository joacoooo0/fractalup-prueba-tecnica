import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import Vista1 from "./pages/vista1.tsx";
import Vista2 from "./pages/vista2.tsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vista1" element={<Vista1 />} />
          <Route path="/vista2" element={<Vista2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
