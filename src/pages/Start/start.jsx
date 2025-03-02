import { createSignal, For } from "solid-js";
import NavBar from "./NavBar";
import Dial from "./dial";
import ListItem from "./ListItem";
import LocalStorageService from "../../utils/localStorageService";

const Start = () => {
  const initialWorkouts = LocalStorageService.getWorkouts()
    .sort((x) => x.id)
    .map((x, i) => {
      return { ...x, active: i === 0 };
    });
  const [workouts, setWorkouts] = createSignal(initialWorkouts);
  const [activeId, setActiveId] = createSignal(0);
  const childUpdateActive = (completedWorkoutId) => {
    const nextId = completedWorkoutId + 1;
    setActiveId(nextId);
    setWorkouts((prev) =>
      prev.map((w) => {
        if (w.id === completedWorkoutId) return { ...w, active: false };
        if (w.id === nextId) return { ...w, active: true };
        return w;
      }),
    );
  };

  return (
    <div class="h-9/10 flex justify-center">
      <div class="rounded-[20px] max-w-9/10 w-full p-4 3xl:p-![18px] bg-mart-100">
        <NavBar />
        <For each={workouts()}>
          {(workout) => (
            <Dial workout={workout} onCustomEvent={childUpdateActive} />
          )}
        </For>
        <ol>
          <For each={workouts()}>
            {(workout) => (
              <ListItem
                workout={workout}
                shouldShow={workout.id >= activeId()}
              />
            )}
          </For>
        </ol>
      </div>
    </div>
  );
};

export default Start;
