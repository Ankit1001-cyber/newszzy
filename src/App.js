import React, { Component } from "react";
import Navbar from "./component/navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hell from "./component/head";
// import LoginForm2 from "./component/loginform2";
// import Newsitem from "./component/Newsitem";
import LoginForm from "./loginForms/login";
import SignUpForm from "./loginForms/signUp";
// import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light", // Initial state for mode
    };
  }

  toggleMode = () => {
    const newMode = this.state.mode === "light" ? "dark" : "light";
    this.setState({ mode: newMode });
    document.body.style.backgroundColor =
      newMode === "light" ? "white" : "#000000";
  };

  render() {
    return (
      <Router>
        <div>
          {/* <Newsitem/> */}
          <Hell mode={this.state.mode} toggleMode={this.toggleMode} />
          <Navbar
            // id="navbar"
            // className="sticky"
            mode={this.state.mode}
            toggleMode={this.toggleMode}
          />
          <Routes>
            {/* <Route
              exact
              path="/home"
              element={<News key="home" pageSize={15} country="us" />}
            /> */}
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={15}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={15}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={15}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={15}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={15}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={15}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={15}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/signUp" element={<SignUpForm />} />
            {/* <Route exact path="/login" element={<LoginForm2 />} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}
