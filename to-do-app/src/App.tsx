import Card from "./componets/Card";

function App() {
  return (
    <>
      <div className="">
        <nav className="font-bold text-5xl text-gray-800 flex flex-col items-center gap-6">
          <h1>مهامي</h1>
          <div className="flex flex-row-reverse text-sm">
            <a
              className="bg-red-50 rounded-sm p-2 text-red-900 border border-gray-300"
              href="#"
            >
              الكل
            </a>
            <a
              className="rounded-sm p-2 text-gray-500 border border-gray-300"
              href="#"
            >
              منجز
            </a>
            <a
              className="rounded-sm p-2 text-gray-500 border border-gray-300"
              href="#"
            >
              غير منجز
            </a>
          </div>
        </nav>
      </div >
      <div className="h-10"></div>
      <div className="flex flex-col justify-center gap-4 w-[90%] m-auto sm:w-[70%] md:w-[60%]">
        <Card title="عنوان المهمة" dateDone="2024-06-01">
          
        </Card>
      </div>
    </>
  );
}

export default App;
