import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

const staticServerUrl = "https://user-app.krampoline.com/kd4fb93df2a38a";

function App(){

  return (
  <div className="App">
    <BrowserRouter>
    <Routes>
      {/*단독레이이아웃*/}
      <Route path={staticServerUrl + "/login"} element={<LoginPage/>}></Route>
      <Route path={staticServerUrl+ "/signup"} element={<RegisterPage/>}></Route>
      {/*공통레이아웃:GNB, footer*/}
      <Route element={<MainLayout/>}>
      <Route path={staticServerUrl + "/"} element={<HomePage/>}></Route>
      <Route path={staticServerUrl + "/product/:productId"}  element={<ProductDetailPage/>}></Route>
    </Route>
    <Route path={staticServerUrl + "/cart"} element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;