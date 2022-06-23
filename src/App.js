import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "components/Header";
import AdminOrderPage from "pages/AdminOrderPage/AdminOrderPage";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import LoginPage from "pages/LoginPage/LoginPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import PaymentPage from "pages/PaymentPage/PaymentPage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import LandingPage from "pages/LandingPage/LandingPage";
import ProductDetailPage from "pages/ProductDetailPage/ProductDetailPage";
import HomePage from "pages/HomePage/HomePage";
import UserProfilePage from "pages/UserProfilePage/UserProfilePage";
import AdminHomePage from "pages/AdminHomePage/AdminHomePage";
import AdminHeader from "components/AdminHeader";
import AdminProductPage from "pages/AdminProductPage/AdminProductPage";
import AdminStockPage from "pages/AdminStockPage/AdminStockPage";
import AdminUserPage from "pages/AdminUserPage/AdminUserPage";
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";
import Nav from "components/Nav";
// import Cart from "pages/CheckoutPage/Cart";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CheckoutCart from "pages/CheckoutPage/CheckoutCart";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://succulentbackend.azurewebsites.net/graphql",
  cache,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            {/* Router for landing page */}
            <Route path="landing" element={<LandingPage />} />

            {/* Router for   */}
            <Route path="/" element={<Nav />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="products" element={<ProductsPage />}>
                <Route path=":productsId" element={<ProductDetailPage />} />
              </Route>
              <Route path="collections" element={<CollectionsPage />}>
                <Route path="new" element={<CollectionsPage />} />
                <Route path="rare" element={<CollectionsPage />} />
                <Route path="best" element={<CollectionsPage />} />
              </Route>
              <Route path="cart" element={<CheckoutCart />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="profile" element={<UserProfilePage />} />
            </Route>
            <Route path="/admin" element={<AdminHeader />}>
              <Route path="home" element={<AdminHomePage />} />
              <Route path="product" element={<AdminProductPage />} />
              <Route path="stock" element={<AdminStockPage />} />
              <Route path="order" element={<AdminOrderPage />} />
              <Route path="user" element={<AdminUserPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
