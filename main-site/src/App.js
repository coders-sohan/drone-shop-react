import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import AddProduct from "./Dashboard/Pages/AddProduct/AddProduct";
import AllProducts from "./Dashboard/Pages/AllProducts/AllProducts";
import Cart from "./Dashboard/Pages/Cart/Cart";
import DashboardHome from "./Dashboard/Pages/DashboardHome/DashboardHome";
import Payment from "./Dashboard/Pages/Payment/Payment";
import Setting from "./Dashboard/Pages/Settings/Setting";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
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
							path="/dashboard"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						>
							<Route exact path="/dashboard" element={<DashboardHome />} />
							<Route
								exact
								path="/dashboard/all-products"
								element={<AllProducts />}
							/>
							<Route
								exact
								path="/dashboard/add-product"
								element={<AddProduct />}
							/>
							<Route exact path="/dashboard/cart" element={<Cart />} />
							<Route exact path="/dashboard/setting" element={<Setting />} />
							<Route exact path="/dashboard/checkout" element={<Payment />} />
						</Route>
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
