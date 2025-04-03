import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import AnalyticsOverview from "./pages/Analytics/AnalyticsOverview";
import ProfileOverview from "./pages/Profile/ProfileOverview";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/analytics/overview" element={<AnalyticsOverview />} />
            <Route path="/profile/overview" element={<ProfileOverview />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
