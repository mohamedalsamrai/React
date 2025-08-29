import type { JSX } from "react";

export default function Card({title, dateDone}: {title:string, dateDone:string}):JSX.Element {
return (
    <>
    <div className="flex flex-row-reverse justify-between w-full bg-blue-900 p-4 rounded-lg items-center">
   <div className="flex flex-col text-white items-end">
    <h1 className="font-bold text-2xl">{title}</h1>
    <h3 className="text-gray-200">{dateDone}</h3>
   </div>
   <div className="flex flex-row-reverse gap-2.5 h-10">
      <button className="bg-green-500 text-white p-2 rounded">اكمال</button>
      <button className="bg-blue-500 text-white p-2 rounded">تعديل</button>
      <button className="bg-red-500 text-white p-2 rounded">حذف</button>
   </div>
    </div>
    
    </>
)

}