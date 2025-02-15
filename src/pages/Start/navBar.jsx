const NavBar = () => {
  return (
    <nav class="w-full p-4 bg-peach-500 shadow">
      <a href="/" class="flex items-center text-mart-950 hover:text-white">
        <svg
          class="w-6 h-6 mr-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Back</span>
      </a>
    </nav>

  )
}

export default NavBar;
