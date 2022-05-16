import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
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
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
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
							element={<ProductDetails />}
							exact
						/>
						<Route path="blogs" element={<Blogs />} />
						<Route path="contact" element={<Contact />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
