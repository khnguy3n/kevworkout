import { createSignal, For, createEffect } from "solid-js";
import "./Edit.css";

const Edit = () => {
  const [workouts, setWorkouts] = createSignal([
    { name: "push ups", seconds: 30, pos: 0 },
    { name: "pull ups", seconds: 20, pos: 11 },
    { name: "plank", seconds: 10, pos: 2 },
  ]);
  return (
    <>
      <ul class="todo-list">
        <For each={workouts().sort((a, b) => a.pos - b.pos)}>
          {(workout, index) => (
            <li>
              <div class="todo-header">
                <div>{workout.pos}</div>
                <span>
                   {workout.name}
                </span>
                <button>
                  <i class="fas fa-trash trash-icon"></i>
                </button>
              </div>
              <div class="todo-details">
                <p>Buy milk, bread, and eggs from the store.</p>
              </div>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default Edit;
