import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Home } from "@Pages/Home/Home";
// import { About } from "@Pages/About/About";

// CSS読み込み
import "normalize.css"
import "./reset.css"

// カラーテーマ

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("app")
);
