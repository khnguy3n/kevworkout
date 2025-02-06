import { createSignal, For, createEffect } from "solid-js";
import "./edit.css";
import EditForm from "./editForm.jsx";
import AddForm from "./addForm.jsx";

const Edit = () => {
  const initialWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
  const [workouts, setWorkouts] = createSignal(initialWorkouts);
  const [activeWorkout, setActiveWorkout] = createSignal(-1);

  createEffect(() => {
    localStorage.clear();
    const workoutsStr = JSON.stringify(workouts());
    localStorage.setItem("workouts", workoutsStr);
  });

  const createWorkout = (event) => {
    const newWorkoutId = workouts().length;
    setWorkouts([...workouts(), { ...event, id: newWorkoutId }]);
  };

  const onDelete = (workoutid) => {
    const keep = workouts()
      .filter((w) => w.id !== workoutid)
      .map((aworkout, index) => {
        return { ...aworkout, id: index };
      });
    setWorkouts(keep);
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
                <EditForm id={workout.id} onDelete={onDelete} />
              </div>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default Edit;
