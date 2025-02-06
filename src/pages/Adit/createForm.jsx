import { createSignal } from "solid-js";
function CreateForm(props) {
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
    props.create?.({ name, dur: parseInt(dur) });
    closeDialog();
  };

  return (
    <>
      <button
        onClick={openDialog}
        class="flex items-center text-xl hover:cursor-pointer bg-gray-200 p-2 text-brand-500 hover:bg-peach-100 rounded-lg"
      >
        <i class="fas fa-plus"></i>
      </button>
      {isOpen() && (
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <div class="flex justify-between">
              <h2 class="text-xl font-bold mb-4">Create Workout</h2>{" "}
              <button onClick={cancelForm}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <form onSubmit={submitForm}>
              <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
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
                  class="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateForm;
