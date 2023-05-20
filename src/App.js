import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// Pages and layout imports
import { SiteHeader } from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import { EditReview } from "./pages/EditReview";
import { AddReview } from "./components/AddReview";
import {Runz} from "./pages/Runz"

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/"
              element={< Homepage />}>
            </Route>
            <Route path="/details/:id"
              element={< ReviewDetails />}>
            </Route>
            <Route path="/editreview/:id" element={< EditReview />}>
            </Route>
            <Route path="/addreview" element={< AddReview />}>
            </Route>
            <Route path="/runz" element={< Runz />}>
            </Route>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
