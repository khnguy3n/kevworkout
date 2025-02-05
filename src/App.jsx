import { createSignal } from "solid-js";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Workout Manager</h1>
      <div>
        <a href="/start">Start</a>
      </div>
      <div>
        <a href="/edit">Edit Workouts</a>
      </div>
      <PWABadge />
    </>
  );
}

export default App;
