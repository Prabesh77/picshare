import toast from "react-hot-toast"
import { Audio } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RiLoader2Line } from 'react-icons/ri'

const Loader = ({message}) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-54 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="w-full h-full text-center flex items-center justify-center  mx-auto space-x-8 py-4 px-8">
          <RiLoader2Line className="text-2xl animate-spin" />
          
      <p>{message}</p>
      </div>
    </div>
  ), {duration: 20000})
}

export default Loader
