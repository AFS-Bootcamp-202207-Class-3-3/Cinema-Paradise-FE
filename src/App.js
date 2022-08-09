import "./App.css";
import {  Routes, Route } from "react-router-dom";
import OrderGroup from "./features/cinema/OrderGroup";
import About from "./pages/About";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage"
import SucessPaidment from "./pages/SucessPaidment";
import MovieDetails from "./features/cinema/MovieDetails";
import PurchasePage from "./features/cinema/PurchasePage";
import MovieList from "./features/cinema/MovieList";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/order" element={<OrderGroup/>} />
          <Route path="/about" element={<About />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/sucess" element={<SucessPaidment/>} />
          <Route path="/" element={<MovieList/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
}

export default App;
