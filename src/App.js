import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";
import DetailsPage from "./pages/DetailsPage";
import AddPatientPage from "./pages/AddPatientPage";
import DonatePage from "./pages/DonatePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AlertPage from "./pages/AlertPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/patients" element={<ProductPage />} />
                    <Route path="/patient-details/:userID" element={<DetailsPage />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/add-patient" element={<AddPatientPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/alert" element={<AlertPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
