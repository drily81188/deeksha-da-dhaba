import "./App.css";
import { Route, Routes } from "react-router-dom";
import { FoodDetails } from "./Component/FoodDetails";
import Home from "./Component/Home";
import { NotFound } from "./Component/NotFound";
import { Category } from "./Component/Category";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<FoodDetails />}></Route>
        <Route path="/product/:category" element={<Category />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
