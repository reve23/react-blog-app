import React from 'react'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
  )
}

export default Pages