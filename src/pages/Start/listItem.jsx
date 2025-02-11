
const ListItem = (props) => {
  let { name, dur: duration } = props;

  return (
    <li class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-2">
      <span class="text-lg font-semibold text-gray-800">{name}</span>
      <span class="text-sm text-gray-500">Duration(seconds): {duration}</span>
    </li>
  )
}

export default ListItem;
