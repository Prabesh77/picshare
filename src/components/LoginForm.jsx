import { useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { useLoginMutation } from "../../features"
// import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import Error from "./common/Error"
// import Error from "../common/Error"
// import Loader from "../common/Loader/Loader"
import Input from "./common/Input"
// import FormLinks from "../common/FormLinks"
// import useAuth from "../../hooks"
import toast from "react-hot-toast"
import Toast from "./common/Toast"
import Loader from "./common/Loader"
import { Link } from "react-router-dom"

const LoginForm = ({setCurrentForm}) => {
  //   const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  //   const [loginApi, { data, error, isSuccess, isLoading }] = useLoginMutation()
  const onSubmit = (d) => {
    // loginApi(d)
    // console.log(d, "login data")
    // FOR NEXT_AUTH
    // const result = await signIn("credentials", {
    //   redirect: false,
    //   username: d.username,
    //   password: d.password,
    // })
    return
  }

  return (
    <>
      <form
        className="w-10/12 md:w-96 mx-auto border border-dashed border-gray-100 px-4 py-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-8 font-bold text-2xl text-center text-white">
          LOGIN
        </h2>
        <Input
          label="username"
          register={register}
          required={true}
          errored={errors?.username?.type === "required" ? true : false}
        />
        <Input
          label="password"
          register={register}
          required={true}
          errored={errors?.password?.type === "required" ? true : false}
        />
        <div className="flex flex-col mt-8">
          <button className="bg-red-600 text-xs py-2 text-gray-100 rounded-sm">

            {/* {isLoading ? "Loading..." : "LOGIN"} */}LOGIN
          </button>
        </div>
        {(errors?.username?.type === "required" ||
          errors?.password?.type === "required") ? (
          <Toast message="Please fill all fields!" type="error" />
        ): null}
        <div className="flex space-x-2 items-center mt-2 justify-center"><p className="text-white text-xs">Don't have an account?</p><span onClick={() => setCurrentForm(1)} className="text-white text-sm cursor-pointer">SIGN UP</span></div>
      </form>
    </>
  )
}

export default LoginForm
