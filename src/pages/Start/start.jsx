import { createSignal, For, createEffect } from "solid-js";
import Dial from "./dial";
import ListItem from "./listItem";
import NavBar from "./navBar";

const Start = () => {
  const initialWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
  const [workouts, setWorkouts] = createSignal(initialWorkouts);
  const [total, setTotal] = createSignal(0);
  const [resetTrigger, setResetTrigger] = createSignal(0); // Forces reactivity

  createEffect(() => {
    const first = workouts()[0];
    if (first) {
      setTotal(first.dur);
      talkie(first.name);
    } else {
      talkie();
    }
    startCountDown(first);
  });

  const talkie = (msg) => {
    const utterMsg = new SpeechSynthesisUtterance();
    utterMsg.volume = 100;
    utterMsg.text = msg || "All workouts are completed";
    window.speechSynthesis.speak(utterMsg);
  };

  const startCountDown = (first) => {
    if (!first) return;

    setTimeout(() => {
      const msg = workouts()[1]
        ? `${first.name} done next workout ${workouts()[1].name}`
        : "No more workouts";
      talkie(msg);
      const [, ...rest] = workouts();
      setWorkouts(rest);
    }, first.dur * 1000);
  };

  return (
    <div class="h-9/10 flex justify-center">
      <div class="rounded-[20px] max-w-9/10 w-full p-4 3xl:p-![18px] bg-mart-100">
        <NavBar />
        <Dial total={total()} reset={resetTrigger()} />
        <ol>
          <For each={workouts()}>
            {(workout) => <ListItem name={workout.name} dur={workout.dur} />}
          </For>
        </ol>
      </div>
    </div>
  );
};

export default Start;
