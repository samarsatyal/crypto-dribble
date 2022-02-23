import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptomania
          <br />
          All Rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies"> || Top 100 Cryptocurrencies</Link>
          <Link to="/news"> || Latest Crypto News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
