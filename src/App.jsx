import PWABadge from "./PWABadge.jsx";

function App() {
  return (
    <div class="h-screen">
      <div class="flex flex-col h-full gap-2">
        <a
          href="/edit"
          class="flex items-center justify-center flex-1 w-full bg-mart-600 text-mooblu-200 rounded-lg shadow text-center hover:text-peach-100"
        >
          <span class="text-[15vh]">Edit</span>
        </a>
        <a
          href="/rest"
          class="flex items-center justify-center flex-1 w-full bg-mart-600 text-mooblu-200 rounded-lg shadow text-center hover:text-peach-100"
        >
          <span class="text-[15vh]">Rest</span>
        </a>
        <a
          href="/start"
          class="flex items-center justify-center flex-1 w-full bg-mart-600 text-mooblu-200 rounded-lg shadow text-center hover:text-peach-100"
        >
          <span class="text-[15vh]">Start</span>
        </a>
      </div>
      <PWABadge />
    </div>
  );
}
export default App;
