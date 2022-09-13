


const Input = ({ label, register, required, disabled, errored }) => {
  return (
    <div className="flex flex-col my-4 ">
      <label className="text-xs tracking-wider mb-1 uppercase text-gray-200">
        {label}
      </label>
      <input
        type={
          label === "password" || label === "confirm password"
            ? "password"
            : label === "email"
            ? "email"
            : label === "deadline"
            ? "date"
            : label === "image"
            ? "file"
            : "text"
        }
        className={`dark:text-gray-200 dark:bg-gray-600 py-1 bg-gray-200 rounded-sm  outline-none min-w-[250px] ${errored?'border border-red-500': ''} ${
          label === "image" ? "max-w-[250px]" : ""
        } ${
          disabled
            ? "pointer-events-none bg-transparent text-md"
            : "pl-4 text-sm"
        } `}
        {...register(label, { required: label === "image" ? false : true })}
      />
    </div>
  )
}

export default Input
