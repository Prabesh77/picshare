import toast from "react-hot-toast"
import { MdErrorOutline } from "react-icons/md"
import { BsCheckCircle } from "react-icons/bs"

const Toast = ({ message, type }) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-full max-w-xs bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="ml-3 flex items-center justify-between  mx-auto space-x-8 py-4 px-8">
        {/* {type === "error" ? (
          <MdErrorOutline className="text-3xl text-red-500" />
        ) : type === "success" ? (
          <BsCheckCircle className="text-3xl text-green-500" />
        ) : null} */}
        {type == 'error' && <MdErrorOutline className="text-3xl text-red-500" />}
        {type == 'success' && <BsCheckCircle className="text-3xl text-green-500" />}
        <p className="text-md  font-medium text-gray-900">{message}</p>
      </div>
    </div>
  ))
}

export default Toast
