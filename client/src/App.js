import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav/SideNav";
import Rules from "./pages/Rules/Rules";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NewRule from "./pages/NewRule/NewRule";
import Team from "./pages/Team/Team";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <Row
          style={{
            marginRight: "0px"
          }}
        >
          <Col md={"2"}>
            <SideNav />
          </Col>

          <Col md="10" className="app">
            <Switch>
              <Route exact path="/">
                <Redirect to="/home"></Redirect>
              </Route>

              <Route exact path="/home" component={Home}></Route>

              <Route exact path="/rules" component={Rules}></Route>
              <Route exact path="/rules/new" component={NewRule}></Route>
              <Route exact path="/teams/:id" component={Team}></Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </Col>
        </Row>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
