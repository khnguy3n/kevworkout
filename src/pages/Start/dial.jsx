import { createEffect, createSignal, onCleanup, Show, onMount } from "solid-js";
import speechService from "../../utils/speechService";

function Dial(props) {
  const RADIUS = 50;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const calcDashOff = (e, t) => CIRCUMFERENCE - (e / t) * CIRCUMFERENCE;

  const { id, name, dur, active } = props.workout;
  const [elapsed, setElapsed] = createSignal(0);
  const [isPaused, setPaused] = createSignal(false);
  let interval;

  const startClock = () => {
    if (interval) {
      clearInterval(interval);
      setElapsed(0);
    }

    setPaused(false);

    interval = setInterval(() => {
      if (!isPaused() && active) {
        const nextElapsed = Math.min(elapsed() + 1, dur);
        setElapsed(nextElapsed);
        if (nextElapsed === dur) {
          speechService.speak(`End ${name}`);
          clearInterval(interval);
          props.onCustomEvent(id);
        }
      }
    }, 1000);
  };

  createEffect(() => {
    setElapsed(0);
    startClock();
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  onMount(() => {
    if (active) {
      speechService.speak(`Start ${name}`);
    }
  });

  return (
    <Show when={active}>
      <>
        <div class="flex justify-center">
          <div class="relative w-64 h-64">
            <svg class="w-full h-full" viewBox="0 0 120 120">
              <circle
                class="text-gray-200"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
              <circle
                class="text-mooblu-500 transition-all duration-300 ease-in-out"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                stroke-dasharray={CIRCUMFERENCE}
                stroke-dashoffset={calcDashOff(elapsed(), dur)}
                stroke-linecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-peach-500">
              {elapsed()}s
            </div>
          </div>
        </div>
        <div class="mt-4 flex justify-center gap-4">
          <button
            class="px-4 py-2 w-full bg-mooblu-600 text-mart-100 rounded-lg shadow"
            type="button"
            onClick={() => setPaused(!isPaused())}
          >
            {isPaused() ? "resume" : "pause"} {name}
          </button>
        </div>
      </>
    </Show>
  );
}

export default Dial;
