import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MaterialManagement from "./pages/MaterialManagement.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/material-management" element={<MaterialManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
