import { createEffect, createSignal, onCleanup } from "solid-js";

const Dial = (props) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const calcDashOff = (circumference, elapsed, total) =>
    circumference - (elapsed / total) * circumference;
  const [elapsed, setElapsed] = createSignal(0);
  let interval;
  const resetDial = () => {
    if (interval) {
      setElapsed(0);
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const aNum = Math.min(elapsed() + 1, props.total);
      setElapsed(aNum);
      if (elapsed() === props.total) clearInterval(interval);
    }, 1000);
  };

  createEffect(() => {
    props.total;
    props.reset;
    resetDial();
  });

  onCleanup(() => clearInterval(interval));

  return (
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
            stroke-dasharray={circumference}
            stroke-dashoffset={calcDashOff(
              circumference,
              elapsed(),
              props.total,
            )}
            stroke-linecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-peach-500">
          {elapsed()}s
        </div>
      </div>
    </div>
  );
};

export default Dial;
