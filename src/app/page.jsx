// import Whatsapp from "@/components/Whatsapp";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
       
       <div className=" flex flex-col gap-3 p-4 bg-white rounded-md shadow-lg w-[90vw] md:w-[400px]">
          <h1 className=" text-yellow-800">Links to some of my Amazing Javascript, Reactjs and Nextjs Drilling Projects</h1>
          <Link href="/todo-app" className=" rounded-md ring-yellow-400 ring-1 p-2 w-1/2 self-center hover:bg-yellow-300 text-yellow-900">
            Sweet Todo App
          </Link>
          <Link href="/accordion" className=" rounded-md ring-yellow-400 ring-1 p-2 w-1/2 self-center hover:bg-yellow-300 text-yellow-900">
            Accordion
          </Link>
          <Link href="/drag-and-drop" className=" rounded-md ring-yellow-400 ring-1 p-2 w-1/2 self-center hover:bg-yellow-300 text-yellow-900">
            Drag and Drop
          </Link>
          <Link href="/registration-form" className=" rounded-md ring-yellow-400 ring-1 p-2 w-1/2 self-center hover:bg-yellow-300 text-yellow-900">
            Register Form
          </Link>
       </div>
    </main>
  );
}
