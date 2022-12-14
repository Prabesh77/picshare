import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoMdAdd, IoMdSearch } from "react-icons/io"
import { FaUserCircle } from 'react-icons/fa'
import { categories } from "../utils/data"

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate()

  if (user) {
    return (
      <>
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-3 ">
          <div className="flex justify-start items-center w-full px-2 rounded-md bg-gray-200 border-none outline-none focus-within:shadow-sm">
            <IoMdSearch fontSize={21} className="ml-1" />
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              value={searchTerm}
              onFocus={() => navigate("/search")}
              className="p-2 w-full bg-gray-200 outline-none"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <Link to={`user-profile/${user?._id}`} className="hidden md:block">
              {user?.image ?  <img
                src={user.image }
                alt="user-pic"
                className="w-12 h-12 rounded-full "
              />:  <FaUserCircle className="text-5xl text-red-500"/>}
             
            
            </Link>
            <Link
              to="/create-pin"
              className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
            >
              <IoMdAdd />
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-between space-x-8 py-4 px-2 overflow-x-scroll hide-scrollbar">
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              key={category.name}
              className=" text-center  flex flex-col justify-center items-center"
            >
              <div className=" w-12 h-12 md:h-16 md:w-16 rounded-full overflow-hidden shadow-sm">
                <img src={category.image} className=" cover " />
              </div>


              <span className="capitalize font-semibold text-gray-500">
                {category.name}
              </span>
            </NavLink>
          ))}
        </div>
      </>
    )
  }

  return null
}

export default Navbar
