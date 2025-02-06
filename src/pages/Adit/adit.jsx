import { createSignal, For } from "solid-js";
import CreateForm from "./createForm";
import EditForm from "./editForm";

const Adit = () => {
  const initialWorkouts = [
    { id: 0, name: "bench press", dur: 20 },
    { id: 1, name: "jumping jacks", dur: 30 },
    { id: 2, name: "push ups", dur: 15 },
  ];
  const [workouts, setWorkouts] = createSignal(initialWorkouts);

  const goBack = () => {
    localStorage.clear();
    const workoutsStr = JSON.stringify(workouts());
    localStorage.setItem("workouts", workoutsStr);
  };

  const createWorkout = (data) => {
    const newWorkoutId = workouts().length;
    setWorkouts([...workouts(), { ...data, id: newWorkoutId }]);
  };

  const handleWorkoutUpdate = (data) => {
    const { shouldRemove, ...updatedData } = data;
    console.log("handle update ", shouldRemove, updatedData)
    const unchanged = workouts().filter(x => x.id != data.id);
    const newWorkouts = shouldRemove ? unchanged : [...unchanged, updatedData];
    setWorkouts(newWorkouts.sort((a, b) => a.id - b.id))
  };

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
            <ul role="list" class="divide-y divide-gray-200">
              <For each={workouts().sort((a, b) => a.id - b.id)}>
                {(workout, index) => (
                  <EditForm name={workout.name} dur={workout.dur} workoutid={workout.id} update={handleWorkoutUpdate} />
                )}
              </For>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adit;
