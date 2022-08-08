import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderList from "./features/cinema/OrderList";
import About from "./pages/About";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage"
import TodoList from "./features/todo/TodoList";
import SucessPaidment from "./pages/SucessPaidment";
import MovieDetails from "./features/cinema/MovieDetails";
import PurchasePage from "./features/cinema/PurchasePage";
import MovieList from "./features/cinema/MovieList";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList/>} />
          <Route path="/order" element={<OrderList/>} />
          <Route path="/about" element={<About />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/sucess" element={<SucessPaidment/>} />
          <Route path="/movie" element={<MovieList/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
}

export default App;
