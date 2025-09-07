import React from 'react'
import "./Main.css"
import {assets} from "../../assets/assets"
const Main = () => {
  return (
    <div className="main">
        <div className = "nav">
            <p> Gemini </p>
            <img src = {assets.user_icon} alt=""/>
        </div>
        <div className='container'>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p> How can I help you today? </p>
            </div>
            <div className='cards'>
                <div className="card">
                    <p>Briefly</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                 <div className="card">
                    <p>Briefly</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                 <div className="card">
                    <p>Briefly</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                 <div className="card">
                    <p>Briefly</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className='main-buttom'>
                <div className='search-box'>
                    <input type="text" placeholder="Enter a prompt"/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt=""/>
                        <img src={assets.send_icon} alt=""/>
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini amy dispaly inaccurate info, including about people so double check for verification.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main