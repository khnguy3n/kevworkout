import WorkoutListItem from "../layouts/workoutListItem.jsx";

const Start = () => {
  return (
    <div>
      <ul role="list" class="divide-y divide-gray-100">
        <WorkoutListItem name="new push up" timestr="10 seconds" />
        <WorkoutListItem name="new2 push up" timestr="10 seconds" />
      </ul>
    </div>
  );
};

export default Start;
