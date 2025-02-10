import { createSignal } from "solid-js";

const EditForm = (props) => {

  let { name, dur } = props || { name: "", dur: 0 };
  const [isOpen, setIsOpen] = createSignal(false);


  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const cancelForm = () => {
    closeDialog();
  };

  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const { name, dur } = Object.fromEntries(data.entries());
    props.update?.({ name, dur: parseInt(dur), id: props.workoutid, shouldRemove: false });
    closeDialog();
  };

  const deleteWorkout = () => {
    props.update?.({ id: props.workoutid, shouldRemove: true });
    closeDialog();
  }

  return (
    <>
      <li class="py-3 sm:py-4" onDblClick={openDialog}>
        <div class="flex items-center">
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-lg font-bold text-mart-900">
              {name}
            </p>
            <p class="text-sm text-mart-700 truncate">
              Duration: {dur} seconds
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            <span class="material-symbols-rounded h-6 w-6 text-mooblu-700 cursor-grab">
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </li>
      {isOpen() && (
        <div class="fixed inset-0 flex items-center justify-center bg-mooblu-950 bg-opacity-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <form onSubmit={submitForm}>
              <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={name}
                  type="text"
                  class="w-full p-2 border rounded-md"
                  placeholder="Enter Workout Name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium mb-1">
                  Duration (seconds):
                </label>
                <input
                  name="dur"
                  type="number"
                  value={dur}
                  min="0"
                  step="1"
                  class="w-full p-2 border rounded-md"
                  placeholder="Duration of workout"
                />
              </div>
              <div class="flex justify-end space-x-2">
                <button
                  onClick={cancelForm}
                  type="button"
                  class="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 bg-mooblu-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
            <button class="px-4 py-2 bg-rose-600 text-white rounded-md" onClick={deleteWorkout}>Delete</button>
          </div>
        </div>
      )}
    </>
  )
}

export default EditForm;
