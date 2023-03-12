import React from 'react'
import './Sectionthree.css'
import Svg from './images/Group 1.svg'

import { Buttonblue } from '../button/ButtonWhite'

export const SectionThree = () => {
  return (
    <div className='div-background'>
        <div className='div-background-div'>
            <h1 className='div-background-h1'
            style={{
                marginBottom:'0.3em'
            }}> 
                We take your security seriously
            </h1>
            <p>Passcoder is certified to the highest industry data privacy standards 
                — protecting you and your customers' privacy. We regularly ask your 
                consent third-party access to your details, 
                Our system is 100% encrypted, we store your data but we don't have access to it, we do not have access to your data, Your data is safe with us.
                 
            </p>
            <Buttonblue />
        </div>
        <div className='div-background-two'>
            <img className='div-background-img' src={Svg} alt={Svg}/>
        </div>


    </div>
  )
}
