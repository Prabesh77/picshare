import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { client } from "../client"
import { feedQuery, searchQuery, userSavedPinsQuery } from "../utils/data"
import MasonryLayout from "./MasonryLayout"
import Spinner from "./Spinner"

const Saved = () => {
  const [pins, setPins] = useState()
  const [loading, setLoading] = useState(false)

  const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();


  useEffect(() => {
    setLoading(true)
    const savedPinsQuery = userSavedPinsQuery(User.googleId)
    client.fetch(savedPinsQuery).then((data) => {
      setPins(data)
      setLoading(false)
    })
  }, [])
  if (loading) {
    return <Spinner message={`We are adding ideas to your feed!`} />
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>
}

export default Saved
