import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LendingPage from "./components/LendingPage";
import AboutUs from "./components/Aboutus";
import ServicePage from "./components/ServicePage";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </Router>
  )
}

export default App

