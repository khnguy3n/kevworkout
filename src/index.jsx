/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";
import Start from "./pages/start.jsx";

const root = document.getElementById("root");

//render(() => <App />, root)

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/edit",
    component: () => <h1>Edit!</h1>,
  },
  {
    path: "/start",
    component: Start,
  },
];
render(() => <Router>{routes}</Router>, root);
