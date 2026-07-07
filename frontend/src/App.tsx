import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Layouts
import { PublicLayout } from "@/layouts/PublicLayout";
import { PatientLayout } from "@/layouts/PatientLayout";
import { TechnicianLayout } from "@/layouts/TechnicianLayout";

// Public Pages
import Home from "@/pages/public/Home";
import Tests from "@/pages/public/Tests";
import Packages from "@/pages/public/Packages";
import HomeCollection from "@/pages/public/HomeCollection";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Login from "@/pages/public/Login";
import NotFound from "@/pages/public/NotFound";

// Patient Pages
import PatientDashboard from "@/pages/patient/Dashboard";
import PatientAppointments from "@/pages/patient/Appointments";
import PatientProfile from "@/pages/patient/Profile";
import PatientPayments from "@/pages/patient/Payments";
import PatientSupport from "@/pages/patient/Support";

// Technician Pages
import TechnicianDashboard from "@/pages/technician/Dashboard";
import TechnicianAppointments from "@/pages/technician/Appointments";
import TechnicianPatients from "@/pages/technician/Patients";
import TechnicianTests from "@/pages/technician/Tests";
import TechnicianPackages from "@/pages/technician/Packages";
import TechnicianReports from "@/pages/technician/Reports";
import TechnicianSettings from "@/pages/technician/Settings";

// Utils
import { ScrollToTop } from "@/components/common/ScrollToTop";
import type { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }} // max 180ms
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/tests"
            element={
              <PageTransition>
                <Tests />
              </PageTransition>
            }
          />
          <Route
            path="/packages"
            element={
              <PageTransition>
                <Packages />
              </PageTransition>
            }
          />
          <Route
            path="/home-collection"
            element={
              <PageTransition>
                <HomeCollection />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransition>
                <Login />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Route>

        {/* Patient Routes */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route
            path="dashboard"
            element={
              <PageTransition>
                <PatientDashboard />
              </PageTransition>
            }
          />
          <Route
            path="appointments"
            element={
              <PageTransition>
                <PatientAppointments />
              </PageTransition>
            }
          />
          <Route
            path="profile"
            element={
              <PageTransition>
                <PatientProfile />
              </PageTransition>
            }
          />
          <Route
            path="payments"
            element={
              <PageTransition>
                <PatientPayments />
              </PageTransition>
            }
          />
          <Route
            path="support"
            element={
              <PageTransition>
                <PatientSupport />
              </PageTransition>
            }
          />
        </Route>

        {/* Technician Routes */}
        <Route path="/technician" element={<TechnicianLayout />}>
          <Route
            path="dashboard"
            element={
              <PageTransition>
                <TechnicianDashboard />
              </PageTransition>
            }
          />
          <Route
            path="appointments"
            element={
              <PageTransition>
                <TechnicianAppointments />
              </PageTransition>
            }
          />
          <Route
            path="patients"
            element={
              <PageTransition>
                <TechnicianPatients />
              </PageTransition>
            }
          />
          <Route
            path="tests"
            element={
              <PageTransition>
                <TechnicianTests />
              </PageTransition>
            }
          />
          <Route
            path="packages"
            element={
              <PageTransition>
                <TechnicianPackages />
              </PageTransition>
            }
          />
          <Route
            path="reports"
            element={
              <PageTransition>
                <TechnicianReports />
              </PageTransition>
            }
          />
          <Route
            path="settings"
            element={
              <PageTransition>
                <TechnicianSettings />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
