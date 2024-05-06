import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Dashboar from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-[#1f2937]">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboar />} />
        {/* <Route path="/detailpage/:productId" element={<DetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
