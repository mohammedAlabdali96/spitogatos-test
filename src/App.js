// import Nav from "./components/navbar";
import React, { useEffect, useState } from "react";
import Header from "./components/navbar.js";
import Footer from "./components/footer.js";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        setLoading(false);
        setError("fetch failed");
      });
  }, []);

  if (loading) {
    return <p>loading..</p>;
  }

  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <LandingPage data={data} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
