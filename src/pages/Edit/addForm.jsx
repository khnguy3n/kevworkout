import { createSignal } from "solid-js";
import "./addForm.css";

function AddForm() {
  let dialogRef;
  const [formData, setFormData] = createSignal({ name: "", dur: "" });
  const [isOpen, setIsOpen] = createSignal(false);

  const openDialog = () => {
    setIsOpen(true);
    dialogRef?.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    dialogRef?.close();
  };

  const handleClickOutside = (event) => {
    if (dialogRef && event.target === dialogRef) {
      closeDialog();
    }
  };

  return (
    <div>
      <button onClick={openDialog}>Add Workout</button>

      {isOpen() && <div class="blurdialog"> hi hi </div>}

      <dialog ref={dialogRef} onClick={handleClickOutside}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted:", formData());
            closeDialog();
          }}
          method="dialog"
        >
          <label>
            Name:
            <input
              type="text"
              value={formData().name}
              onInput={(e) =>
                setFormData({ ...formData(), name: e.currentTarget.value })
              }
            />
          </label>
          <label>
            Duration (seconds):
            <input
              type="number"
              value={formData().dur}
              onInput={(e) =>
                setFormData({ ...formData(), dur: e.currentTarget.value })
              }
            />
          </label>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={closeDialog}>
              <i class="fas fa-times-circle times-circle-icon"></i>
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default AddForm;
