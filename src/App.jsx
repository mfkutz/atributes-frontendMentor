import Atributes from "./components/Atributes"
import Card from "./components/Card"

function App() {

  return (
    <div className="bg-White flex justify-center lg:items-center min-h-screen lg:flex-row ">
      <div className='flex flex-col lg:flex-row lg:shadow-xl lg:rounded-b-3xl'>
        {/* ///////////////// LEFT COLUM /////////////////// */}
        <Card />
        {/* ///////////////// RIGHT COLUM /////////////////// */}
        <div className="lg:p-7 lg:px-9 p-6  min-w-[370px] lg:rounded-r-3xl flex flex-col ">
          <div className="lg:text-xl text-[18px] font-bold text-Dark-gray-blue lg:mb-6 mb-4 ">
            Summary
          </div>
          <Atributes />
          <button className='bg-Dark-gray-blue hover:bg-gradient-to-b from-Light-slate-blue-background to-Light-royal-blue-background rounded-3xl py-3 text-gray-50 mt-5'>
            Continue
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
