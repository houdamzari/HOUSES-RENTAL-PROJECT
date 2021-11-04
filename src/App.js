import logo from './logo.svg';
import Login from "./Login/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import NearbySection from "./NearbySection/NearbySection";
import GridSection from "./Grid/GridSection";
import Footer from "./Footer/Footer";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
      <Router>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Home />
              <NearbySection />
              <GridSection />
              <Footer />
            </Route>
            <Route exact path="/About">
              <Navbar />
              <About />
            </Route>
            {/*<Route path="/dashboard">*/}
            {/*  <Dashboard />*/}
            {/*</Route>*/}
          </Switch>
      </Router>
  );
}

// You can think of these components as "pages"
// in your app.
//
// function Home() {
//   return (
//       <div>
//         <h2>Home</h2>
//       </div>
//   );
// }
//
// function About() {
//   return (
//       <div>
//         <h2>About</h2>
//       </div>
//   );
// }
//
// function Dashboard() {
//   return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//   );
// }
