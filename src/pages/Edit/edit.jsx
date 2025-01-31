import "./Edit.css";
const Edit = () => {
  return (
    <>
      <ul class="todo-list">
        <li>
          <div class="todo-header">
            <span>Buy groceries</span>
            <i class="fas fa-trash trash-icon"></i>
          </div>
          <div class="todo-details">
            <p>Buy milk, bread, and eggs from the store.</p>
          </div>
        </li>
        <li>
          <div class="todo-header">
            <span>Read a book</span>
            <i class="fas fa-trash trash-icon"></i>
          </div>
          <div class="todo-details">
            <p>Finish reading the new novel I've started.</p>
          </div>
        </li>
        <li>
          <div class="todo-header">
            <span>Exercise</span>
            <i class="fas fa-trash trash-icon"></i>
          </div>
          <div class="todo-details">
            <p>Go for a run in the park for 30 minutes.</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Edit;
