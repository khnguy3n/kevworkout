import { createSignal, createEffect } from "solid-js";
import "./editForm.css";

export default function EditForm(props) {
  const [name, setName] = createSignal(props.curName || "");
  const [pos, setPos] = createSignal(props.curPos || "");
  const [dur, setDur] = createSignal(props.curDur || "");

  /*
  createEffect(() => {
    setName(props.curName || "");
    setPos(props.curPos || -1);
    setDur(props.curDur || 0);
  });
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = new CustomEvent("formSubmit", {
      detail: { name: name(), pos: pos() },
    });
    props.onFormSubmit?.(event);
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of Workout</label>
          <input
            type="text"
            value={name()}
            onInput={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duration of Workout (seconds)</label>
          <input
            type="number"
            value={dur()}
            onInput={(e) => setPos(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Order Position of Workout</label>
          <input
            type="number"
            value={pos()}
            onInput={(e) => setPos(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button style="width:50%">
        <i class="fas fa-trash trash-icon"></i>
      </button>
    </div>
  );
}
