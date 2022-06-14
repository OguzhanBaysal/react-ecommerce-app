import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./pages/ProtectedRoute";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Error404 from "./pages/Error404";

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<div id="content">
					<Routes>
          				<Route path="/" element={<Products/>} />
            			<Route path="/product/:product_id" element={<ProductDetail/>} />
            			<Route path="/signin" element={<Signin/>} />
            			<Route path="/signup" element={<Signup/>} />
            			<Route path="/basket" element={<Basket/>} />
            			
						<Route path="/profile" element={
            				<ProtectedRoute>
              					<Profile />
							</ProtectedRoute>
							}
						/>
						<Route path="/admin" element={
							<ProtectedRoute admin={true}>
              					<Admin />
							</ProtectedRoute>
							}
						/>
						
            			<Route path="*" element={<Error404/>} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;




// import './App.css';

// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Navbar from './components/Navbar';

// import Signup from './pages/Auth/Signup';
// import Signin from './pages/Auth/Signin';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
// import Profile from './pages/Profile';

// function App() {
//   return (
//     <Router>
//       <div>
        
//         <Navbar/>
        
//         <div id="content">
//           <Routes>
//             <Route path="/" element={<Products/>} />     
//             <Route path="/product/:product_id" element={<ProductDetail/>} />     
//             <Route path="/signup" element={<Signup />} />          
//             <Route path="/signin" element={<Signin />} />          
//             <Route path="/profile" element={<Profile />} />          
//           </Routes>
//         </div>       

//       </div>
//     </Router>
//   );
// }

// export default App;
