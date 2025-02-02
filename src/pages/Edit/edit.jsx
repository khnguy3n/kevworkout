import { createSignal, For, createEffect } from "solid-js";
import "./Edit.css";
import EditForm from "./editForm.jsx";
import AddForm from "./addForm.jsx";

const Edit = () => {
  const [workouts, setWorkouts] = createSignal([
    { name: "push ups", dur: 30, id: 0 },
    { name: "pull ups", dur: 20, id: 1 },
    { name: "plank", dur: 10, id: 2 },
  ]);
  const [activeWorkout, setActiveWorkout] = createSignal(-1);

  const createWorkout = (event) => {
    const newWorkoutId = workouts().length;
    setWorkouts([...workouts(), {...event, id: newWorkoutId}]);
  };

  return (
    <>
      <AddForm create={createWorkout} />
      <ul class="todo-list">
        <For each={workouts().sort((a, b) => a.id - b.id)}>
          {(workout, index) => (
            <li
              onClick={() => setActiveWorkout(index())}
              classList={{ open: activeWorkout() === index() }}
            >
              <div class="todo-header">
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
