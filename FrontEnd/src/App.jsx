
import Dashboard from "./sections/Dashboard";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HomePage from "./Auth/HomePage";
import LoginPage from "./Auth/LoginPage";
import SignupPage from "./Auth/SignupPage";
import { BrowserRouter as Router, Route, Routes, redirect, Navigate } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import MainPrivateRoute from "./privateRoutes/MainPrivateRoute";
// import { GlobalContext } from "./context/AuthProvider"
import { AuthProvider } from "./context/AuthProvider";
// import { useContext } from "react";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:5000/api/user';
axios.defaults.withCredentials = true;

// =================================================================
const App = () => {
  // const { userAuth } = useContext(GlobalContext);

  return (
    <Router>
      <section>
        <AuthProvider>
          <Toaster position="top-right" toastOptions={{duration: 2000}}/>

          {/* Header */}
          <Header />

          <Routes>

            {/* /Public Routes */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<SignupPage />} />

            {/* /Public Routes */}
            <Route exact path="/user" element={<MainPrivateRoute />} >
              <Route exact path="" element={<Dashboard />} />
            </Route>

            <Route path="/redirect" element={<Navigate to="/"/>} />
          </Routes>

          {/* Footer */}
          <Footer />

        </AuthProvider>
      </section>
    </Router>
  )
}

export default App;