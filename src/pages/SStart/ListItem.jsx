import { Show } from "solid-js";

const ListItem = (props) => {
  const { name, dur } = props.workout;

  return (
    <Show when={props.shouldShow}>
      <li class="w-full mx-auto flex flex-col p-4 border-8 border-solid border-mooblu-500 rounded-lg shadow-sm mb-2 mt-8">
        <span class="text-lg font-semibold text-peach-500 text-center">
          <p> {name} </p>
          <span> Duration(Seconds) - {dur} </span>
        </span>
      </li>
    </Show>
  );
};

export default ListItem;
