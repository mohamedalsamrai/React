import CloudIcon from '@mui/icons-material/Cloud';
function App() {
  return (
    <div
      dir="rtl"
      className="w-full h-screen bg-blue-600 flex flex-col justify-center items-center font-IBM"
    >
      <div className=" bg-blue-900 text-white flex flex-col rounded-3xl py-6 px-6">
        <div className="flex flex-row w-full h-[30px] gap-6 items-end">
          <h1 className="text-4xl font-bold">سامراء</h1>
          <p className="text-sm font-normal">مايو ٣٠ ٢٠٢٥</p>
        </div>
        <hr className="w-full h-[1px] bg-white mt-3" />
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 items-center h-[80px] mt-6">
              <p className="text-[100px] font-[400]">33</p>
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                className="h-[100px] object-cover"
              />
            </div>
            <p className="text-xl font-normal px-4">سحب الصباح</p>
            <pre className="text-sm font-semibold px-4">
              الصغرى: ٢٠ | الكبرى: ٣٣
            </pre>
          </div>
    <CloudIcon
            style={{
              fontSize: "200px",
              color: "white",
            }}
          />
        </div>
        
      </div>
     <div className="flex justify-end items-end w-[68%] mt-3">
     <button className=" flex text-white hover:text-blue-900 hover:bg-white rounded-full py-2 px-4 checked:bg-white cursor-pointer"> العربية</button>
     </div>
    </div>
  );
}

export default App;
