import { BiImage } from "react-icons/bi"
import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
}

const PulseLoader = () => {
    const pulses = [1, 2, 3, 4, 5, 6, 7]
  return (
    <Masonry
      className="flex animate-slide-fwd"
      breakpointCols={breakpointColumnsObj}
    >
        {pulses?.map(pulse =>  <div key={pulse} className="border border-gray-200 bg-gray-100 shadow rounded-md my-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
        <div className="animate-pulse flex flex-col items-center h-full justify-between">
          <div className="w-full flex justify-between">
            <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
            <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
          </div>
          <BiImage className="text-8xl text-gray-300 text-center animate-pulse" />
          <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
        </div>
      </div>)}
     
    </Masonry>

    // <div>
    //   <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">

    //   </div>

    // </div>
  )
}

export default PulseLoader

{
  /* <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-100 shadow rounded-md mt-8 p-4 max-w-sm mx-auto h-96 w-72 animate-pulse">
          <div className="animate-pulse flex flex-col items-center h-full justify-between">
            <div className="w-full flex justify-between">
              <div className="bg-gray-300 h-12 w-12 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-8 w-24 rounded-full animate-pulse"></div>
            </div>
            <BiImage className='text-8xl text-gray-300 text-center animate-pulse'/>
            <div className="bg-gray-300 h-4 w-full rounded-full animate-pulse"></div>
          </div>
        </div> */
}
