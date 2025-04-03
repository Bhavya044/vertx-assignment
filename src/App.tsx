import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Overview from "./pages/Analytics/Overview";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/analytics/overview" element={<Overview />} />
            <Route path="/profile/overview" element={<Overview />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
