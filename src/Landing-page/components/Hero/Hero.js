import "./Hero.css"
import React from 'react'
import Rectangle from './images/Mockup 1 1.png'
import { Buttonblue } from "../button/Buttonblue"
import { Buttongray } from "../button/Buttongray"

export const Hero = () => {
  return (

    <>
        <div className="hero-div">

            <div className="new-width-changes">
                <div className="div-gray-tray">
                    <div className="div-for-new">
                        <p>New</p>
                    </div>
                    <p>Passcoder is Live in Nigeria!</p>
                </div>
                <h1 className="h1-hero">Get One Digital  ID  for all platforms</h1>
                <p className="p-hero">Passcoder helps you handle your KYC verification, 
                    across all websites and applications. One digital ID for anytime, anywhere, any-day</p>
                <div className="hero-btn-div">
                    <Buttonblue />
                   <Buttongray />
                </div>
            </div>
            <div >
                <img 
                className="img-for-width"
                src={Rectangle} 
                alt="illustration" 
            
                
                />
                
            </div>
        </div>



    </>
    
  )
}
