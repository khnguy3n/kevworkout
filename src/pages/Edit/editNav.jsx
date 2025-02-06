function EditNav() {
  return (
    <nav class="bg-mooblu-900">
      <button> HOME </button>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4 text-white">
                <a
                  href="/"
                  class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium hover:bg-peach-400"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="/edit"
                  class="rounded-md px-3 py-2 text-sm font-medium hover:bg-peach-400"
                >
                  Edit
                </a>
                <a
                  href="/start"
                  class="rounded-md px-3 py-2 text-sm font-medium hover:bg-peach-400"
                >
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 text-white">
          <a
            href="/"
            class="block rounded-md bg-mart-900 px-3 py-2 text-base font-medium hover:bg-peach-400"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="/edit"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-peach-400"
          >
            Edit
          </a>
          <a
            href="/start"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-peach-400"
          >
            Start
          </a>
        </div>
      </div>
    </nav>
  );
}
export default EditNav;
