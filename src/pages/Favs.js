import React from 'react'
import { HomeAppBar } from "../components/HomeAppBar";
import { Favorites } from "../features/favorite/favorites";



export const Favs = () => {
  return (
    <>
    <HomeAppBar/>
    <Favorites/>
    </>
  )
}

export default Favs