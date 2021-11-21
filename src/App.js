import Login from "./Login/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import NearbySection from "./NearbySection/NearbySection";
import GridSection from "./Grid/GridSection";
import Footer from "./Footer/Footer";
import AddPost from "./AddPost/Post";
import PostPage from "./PostPage/PostPage";
import Profile from "./Profile/Profile";
import Historique from "./Historique/Historique";
import Requests from "./Historique/Requests";

export default function App() {
  const [commo, setCommo] = React.useState([]);
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Home
            setDate={setDate}
            commo={commo}
            setLocation={setLocation}
            setCommo={setCommo}
          />
          <NearbySection />
          <GridSection commo={commo} location={location} date={date} />
          <Footer />
        </Route>
        <Route exact path="/About">
          <Navbar />
          <About />
        </Route>
        <Route path="/Addpost">
          <AddPost />
        </Route>
        <Route path="/Post/:id">
          <Navbar />
          <PostPage />
        </Route>
        <Route path="/Profile">
          <Navbar />
          <Profile />
        </Route>
        <Route path="/Historique">
          <Navbar />
          <Historique />
        </Route>
        <Route path="/Requests">
          <Navbar />
          <Requests />
        </Route>
      </Switch>
    </Router>
  );
}
