import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages and layout imports
import { SiteHeader } from "./components/SiteHeader";
import { Homepage } from "./pages/Homepage";
import { ReviewDetails } from "./pages/ReviewDetails";
import { Category } from "./pages/Category";
import { AddReview } from "./components/AddReview";


function App() {
  return (
    <Router>
  
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/"
              element={< Homepage />}>
            </Route>
            <Route path="/details/:id"
              element={< ReviewDetails />}>
            </Route>
            <Route path="/category/:id" element={< Category />}>
            </Route>
            <Route path="/addreview" element={< AddReview />}>
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
