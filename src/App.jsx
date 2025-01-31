import { createSignal } from "solid-js";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Workout Manager</h1>
      <ul class="menu bg-base-200 rounded-box divide-y">
        <li class="flex gap-x-6 py-5">
          <a
            class="justify-center text-2xl font-semibold text-green-200"
            href="/start"
          >
            Start
          </a>
        </li>
        <li class="flex gap-x-6 py-5">
          <a
            class="justify-center text-2xl font-semibold text-yellow-200"
            href="/edit"
          >
            Edit Workouts
          </a>
        </li>
      </ul>
      <PWABadge />
    </>
  );
}

export default App;
