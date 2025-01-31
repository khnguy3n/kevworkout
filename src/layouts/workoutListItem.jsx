const WorkoutListItem = (props) => {
  return (
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-lg font-semibold text-green-300">{props.name}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <div class="min-w-0 flex-auto">
          <p class="text-lg font-semibold text-yellow-300">{props.timestr}</p>
        </div>
      </div>
    </li>
  );
};

export default WorkoutListItem;
