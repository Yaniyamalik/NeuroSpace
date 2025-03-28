import React from 'react'
import { Socialex } from './Socialex'
import { Stressmanagement } from './Stressmanagement'
import { Shop } from './Shop'
import image1 from "./1.png"
import "./Mainpage.css"

export const Mainpage = () => {
  return (
    <div className="main">
        <div className="main-poster">
            <img src={image1} alt="main-poster" className='main-img'/>
            <Socialex/>
            <Stressmanagement/>
            <Shop/>
        </div>
    </div>
  )
}
