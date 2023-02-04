import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { MENUS, users, products } from "./util/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useState } from "react";
import Product from "./pages/Product";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  function loginHandler(e) {
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log(e.target.password.value);
  }
  isLogged;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route
          path={MENUS[2].url}
          element={
            isLogged ? <Profile /> : <Login loginHandler={loginHandler} />
          }
        />
        <Route path="/product/:prodId" element={<Product data={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
