import { createSignal, For } from "solid-js";
import { dndzone } from "solid-dnd-directive";
import CreateForm from "./createForm";
import EditForm from "./editForm";

function Drag() {
  const initialWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
  const [items, setItems] = createSignal(initialWorkouts);

  const goBack = () => {
    localStorage.clear();
    const workoutsStr = JSON.stringify(items());
    localStorage.setItem("workouts", workoutsStr);
  };

  const createWorkout = (data) => {
    const newWorkoutId = items().length;
    setItems([...items(), { ...data, id: newWorkoutId }]);
  };

  const handleWorkoutUpdate = (data) => {
    const { shouldRemove, ...updatedData } = data;
    const unchanged = items().filter((x) => x.id != data.id);
    const newWorkouts = shouldRemove ? unchanged : [...unchanged, updatedData];
    setItems(newWorkouts.toSorted((a, b) => a.id - b.id));
  };

  function handleDndEvent(e) {
    const { items: newItems } = e.detail;
    const updateIds = newItems
      .map((item, index) => {
        return { ...item, id: index };
      })
      .toSorted((a, b) => a.id - b.id);
    setItems(updateIds);
  }
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="rounded-[20px] max-w-9/10 w-full !p-4 3xl:p-![18px] bg-white">
          <div class="flex flex-row justify-between text-mooblu-900">
            <div class="flex items-center">
              <a href="/">
                <button
                  class="flex items-center text-xl hover:cursor-pointer bg-gray-200 p-2 text-brand-500 hover:bg-peach-100 rounded-lg"
                  onClick={goBack}
                >
                  <i class="fas fa-angle-left"></i>
                </button>
              </a>
              <h4 class="ml-4 text-xl font-bold">Workouts</h4>
            </div>
            <CreateForm create={createWorkout} />
          </div>
          <div class="h-full w-full">
            <ul
              use:dndzone={{ items }}
              on:consider={handleDndEvent}
              on:finalize={handleDndEvent}
            >
              <For each={items()}>
                {(item) => (
                  <EditForm
                    name={item.name}
                    dur={item.dur}
                    workoutid={item.id}
                    update={handleWorkoutUpdate}
                  />
                )}
              </For>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drag;
