import { createSignal, For, createEffect } from "solid-js";
import "./Edit.css";
import EditForm from "./editForm.jsx";

const Edit = () => {
  const [workouts, setWorkouts] = createSignal([
    { name: "push ups", dur: 30, pos: 0 },
    { name: "pull ups", dur: 20, pos: 11 },
    { name: "plank", dur: 10, pos: 2 },
  ]);
  return (
    <>
      <ul class="todo-list">
        <For each={workouts().sort((a, b) => a.pos - b.pos)}>
          {(workout, index) => (
            <li>
              <div class="todo-header">
                <div>{workout.pos}</div>
                <span>{workout.name}</span>
              </div>
              <div class="todo-details">
                <EditForm />
              </div>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default Edit;
