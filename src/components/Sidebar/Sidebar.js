import React from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useState } from "react"
const Sidebar = () => {

    const [extended, setExtended] = useState(true);
    function onClick(){
        setExtended(!extended)
    }
  return (
    <div className = "sidebar">
        <div className= "top">
            <img onClick = {onClick} className = "menu" src={assets.menu_icon} alt="" />
            {/* <img onClick = {() => setExtended(prev=>!prev)} className = "menu" src={assets.menu_icon} alt="" /> */}
            <div className='new-chat'>
                <img width = "20px" src={assets.plus_icon} alt=""/>
            { extended ? <p>New Chat </p> : null }
            </div>
            { extended ? <div className='recent'>
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img width = "25px" src={assets.message_icon} alt="" />
                    <p> What is react ...</p>
                </div>
            </div> : null }
        </div>
        <div className = "bottom">
            <div className='bottom-icon buttom-entry'>
                <img width = "23px" src={assets.question_icon} alt="" />
                { extended ? <p>Help</p> : null }
            </div>
            <div className='bottom-icon buttom-entry'>
                <img width = "23px" src={assets.history_icon} alt="" />
                { extended ? <p>Activity</p> : null }
            </div>
            <div className='bottom-icon buttom-entry'>
                <img width = "23px" src={assets.setting_icon} alt="" />
                { extended ? <p>Settings</p> : null }
            </div>
        </div>
    </div>
  );
}

export default Sidebar 