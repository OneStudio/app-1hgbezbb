
import { Show, createEffect } from 'solid-js';
import { isServer } from 'solid-js/web';
import { createAsync, useAction } from "@solidjs/router";
export default function QuickForm(props) {
  const loaderFunc = props?.loader?.[0];
  const args = props?.loader?.[1];
  const initialData = createAsync(async () => {
    if(!isServer && window?.$$mode !== 'preview') {
       return {};
    }
    if(!loaderFunc) return Promise.resolve({});
    const data = await loaderFunc(args);
    return data;
  });

  let formRef!: HTMLFormElement;

   return (
    <form ref={formRef} data-com method="post" class='p-4 flex flex-col gap-4 w-full min-h-[100px]' action={props?.action}>
      <Show when={props?.title}>
        <div data-com>{props?.title}</div>
      </Show>
      <div data-com class='grid gap-4' style={`grid-template-columns: repeat(${props?.columns ?? 2}, 1fr);`}>
          {props?.children?.(initialData())}
      </div>
      <div data-com class='flex gap-2 justify-center'>
        <button data-com class='rounded ring-1 text-blue-500 px-4 py-2 text-sm' type='submit'>
          {props?.submit ?? 'Submit'}
        </button>
      </div>
    </form>
  );
}