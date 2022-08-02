import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "components/Header";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import PaymentPage from "pages/PaymentPage/PaymentPage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import LandingPage from "pages/LandingPage/LandingPage";
import ProductDetailPage from "pages/ProductDetailPage/ProductDetailPage";
import HomePage from "pages/HomePage/HomePage";
import UserProfilePage from "pages/UserProfilePage/UserProfilePage";
import AdminHomePage from "pages/AdminHomePage/AdminHomePage";
import AdminHeader from "pages/AdminHomePage/components/Sidebar";
import AdminProductPage from "pages/AdminHomePage/pages/Inventory";
import AdminOrderPage from "pages/AdminHomePage/pages/Order";
import AdminUserListPage from "pages/AdminHomePage/pages/Users";
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";

import HeaderFooter from "components/HeaderFooter";
// import Cart from "pages/CheckoutPage/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CheckoutCart from "pages/CheckoutPage/CheckoutCart";
import NotFound from "components/NotFound";
import ContactPage from "pages/ContactPage/Contact";
import Privacy from "pages/ContactPage/Privacy";
import PlaceOrder from "pages/CheckoutPage/components/order/PlaceOrder";

import { LoginPage } from "pages/LoginPage/LoginPage";
import ResetPassPage from "pages/ResetPassPage/ResetPassPage";
import { ForgotPassPage } from "pages/ForgotPassPage/ForgotPassPage";
import FileUpload from "components/fileUpload";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { useMeQuery } from "queries/utilQueries";
import Loading from "components/Loading";

function App() {
  const { data, loading, error } = useMeQuery()


  if (loading) return <div></div>
  if (error) return <div>Error!</div>

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Router for landing page */}
          <Route path="landing" element={<LandingPage />} />

          {/* Router for   */}
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot" element={<ForgotPassPage />} />
            <Route path="reset">
              <Route path=":id" element={<ResetPassPage />} />
            </Route>
            <Route path="file" element={<FileUpload />} />
            <Route path="products">
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>
            <Route path="succulents" element={<CollectionsPage />}>
              <Route path="new" element={<CollectionsPage />} />
              <Route path="rare" element={<CollectionsPage />} />
              <Route path="best" element={<CollectionsPage />} />
            </Route>
            <Route path="cart" element={<CheckoutCart />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout/*" element={<CheckoutPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="loading" element={<Loading />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          {data?.me?.role === "admin" && (
            <Route path="/admin" element={<AdminHeader />}>
              <Route path="home" element={<AdminHomePage />} />
              <Route path="product" element={<AdminProductPage />} />
              <Route path="order" element={<AdminOrderPage />} />
              <Route path="user" element={<AdminUserListPage />} />
            </Route>
          )}




        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
