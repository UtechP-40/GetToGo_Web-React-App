import React from 'react'
import { MdChat } from 'react-icons/md';
import '../App.css'
import { MdNotifications } from 'react-icons/md';
import pradeepGun from './Pradeep-gun.jpeg';
export default function Navbar() {
  return (
    <div className='topnav'>
        <div>
        <img src="../logo.png" alt="logo" />
        </div>
        <div className="search-container">
            <input type="text" placeholder="Search.." className="search-box" />
        </div>
        <div id="topnav">
        <MdNotifications style={{ margin: '0 10px', color: '', fontSize: '24px' }} id='notification' />
        <MdChat style={{ margin: '0 10px', color: '', fontSize: '24px' }} id='chat'/>
        {/* <div class="he profile-container"> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={pradeepGun} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />

                </svg>
                <span className="profile-name">Pradeep</span>
                {/* </div> */}
        </div>
    </div>
  )
}
