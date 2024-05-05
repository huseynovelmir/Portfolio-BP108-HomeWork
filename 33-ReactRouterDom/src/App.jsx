import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import DetailPage from "./Pages/DetailPage";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
