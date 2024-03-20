
import { createEffect } from "solid-js"
export default function SingleLineText(props) {
  return (
    <div data-com class={`flex flex-col space-y-2 col-span-${props?.span ?? 1}`}>
      <label data-com class='text-gray-600 font-medium'>{props?.label}</label>
      <input
        data-com
        class='px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
        type='text'
        name={props?.name}
        placeholder={props?.placeholder}
        value={props?.value}
      />
    </div>
  );
}