import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/tests" element={<h1>Tests</h1>} />
        <Route path="/packages" element={<h1>Packages</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/home-collection" element={<h1>Home Collection</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/patient-dashboard" element={<h1>Patient Dashboard</h1>} />
        <Route
          path="/technician-dashboard"
          element={<h1>Technician Dashboard</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
