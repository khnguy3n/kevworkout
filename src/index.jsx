/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App.jsx";
import Start from "./pages/Start/start.jsx";
import Edit from "./pages/Edit/edit.jsx";
import Adit from "./pages/Adit/adit.jsx";

const root = document.getElementById("root");

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/adit",
    component: Adit,
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
