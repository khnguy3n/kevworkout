/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";
import Start from "./pages/Start/start.jsx";
import Edit from "./pages/Edit/edit.jsx";

const root = document.getElementById("root");

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/edit",
    component: Edit,
  },
  {
    path: "/start",
    component: Start,
  },
];
render(() => <Router>{routes}</Router>, root);
