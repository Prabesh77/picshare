import GoogleLogin from "react-google-login"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import bgVideo from "../assets/share.mp4"
import logo from "../assets/logo_white.png"
import { client } from '../client'
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useState } from "react"
import Loader from "./common/Loader"
import Toast from "./common/Toast"

const Auth = () => {
    const [loading, setLoading] = useState(false)
  const [currentForm, setCurrentForm] = useState(0)

  const navigate = useNavigate()
  const responseGoogle = response => {
    setLoading(true)
    localStorage.setItem('user', JSON.stringify(response?.profileObj))
    const { name, googleId, imageUrl} = response?.profileObj
    const doc = {_id: googleId, _type: 'user', userName: name, image: imageUrl}
    client.createIfNotExists(doc).then(() => {
      setLoading(false)
      navigate('/', { replace: true})
    })
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={bgVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          {!currentForm?<LoginForm setCurrentForm={setCurrentForm} />:
      <RegisterForm setCurrentForm={setCurrentForm}/>}
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  className="bg-mainColor flex justify-center items-center p-3 rounded-md cursor-pointer outline-none font-semibold"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign In with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
        {loading && <Toast message="Logged In with Google" type="success" />}
      </div>
    </div>
  )
}

export default Auth
