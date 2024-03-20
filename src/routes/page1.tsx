import SingleLineText from "~/tpl/SingleLineText"
import { createCustomer } from "~/lib/api.ts"
import QuickForm from "~/tpl/QuickForm"
export default function Page1() {
	return (<div class={"p-4 flex flex-col w-full h-full"}><QuickForm title={"Form Title"} loader={null} action={createCustomer} columns={1} submit={"Submit"} _droppable={true}>{ (values) => <div ><SingleLineText name={"name"} value={values?.name} label={"name"} placeholder={"Enter text..."} required={false} span={1} /><SingleLineText name={"comment"} value={values?.comment} label={"comment"} placeholder={"Enter text..."} required={false} span={1} /></div>}</QuickForm></div>)
}