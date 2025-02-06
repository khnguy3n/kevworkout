import { createSignal, For, createEffect } from "solid-js";
import "./start.css";

const Start = () => {
  const initialWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
  const [workouts, setWorkouts] = createSignal(initialWorkouts);

  return (
    <ol>
      <For each={workouts()}>{(workout) => <li>{workout.name}</li>}</For>
    </ol>
  );
};

export default Start;
