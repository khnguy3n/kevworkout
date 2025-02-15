
const ListItem = (props) => {
  let { name, dur: duration } = props;

  return (
    <li class="w-2/3 mx-auto flex items-center justify-between p-4 bg-mooblu-950 border border-gray-200 rounded-lg shadow-sm mb-2">
      <span class="text-lg font-semibold text-peach-400">{name}</span>
      <span class="text-sm text-mooblu-200">Duration(seconds): {duration}</span>
    </li>
  )
}

export default ListItem;
