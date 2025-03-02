/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App.jsx";
import Start from "./pages/Start/Start.jsx";
import Drag from "./pages/Edit/drag.jsx";

const root = document.getElementById("root");

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/edit",
    component: Drag,
  },
  {
    path: "/start",
    component: Start,
  },
];
render(() => <Router>{routes}</Router>, root);
