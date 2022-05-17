import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Dashboard/Pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register";
import Shop from "./pages/Shop/Shop";

function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} exact />
						<Route path="home" element={<Home />} exact />
						<Route path="about" element={<About />} exact />
						<Route
							path="shop"
							element={
								<PrivateRoute>
									<Shop />
								</PrivateRoute>
							}
						/>
						<Route
							path="product/details/:productId"
							element={
								<PrivateRoute>
									<ProductDetails />
								</PrivateRoute>
							}
							exact
						/>
						<Route
							path="cart"
							element={
								<PrivateRoute>
									<Cart />
								</PrivateRoute>
							}
							exact
						/>
						<Route
							path="checkout"
							element={
								<PrivateRoute>
									<Payment />
								</PrivateRoute>
							}
							exact
						/>
						<Route
							path="dashboard"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
							exact
						/>
						<Route path="blogs" element={<Blogs />} exact />
						<Route path="contact" element={<Contact exact />} />
						<Route path="login" element={<Login />} exact />
						<Route path="register" element={<Register />} exact />
						<Route path="*" element={<ErrorPage />} exact />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
