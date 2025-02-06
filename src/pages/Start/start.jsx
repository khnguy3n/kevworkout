import { createSignal, For, createEffect } from "solid-js";

const Start = () => {
  const initialWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
  const [workouts, setWorkouts] = createSignal(initialWorkouts);

  createEffect(() => {
    const first = workouts()[0];
    if (first) {
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
    <ol>
      <For each={workouts()}>{(workout) => <li>{workout.name}</li>}</For>
    </ol>
  );
};

export default Start;
