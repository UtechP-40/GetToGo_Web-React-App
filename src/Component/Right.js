import React from 'react'
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
export default function Right() {
  return (
    <div className='right'>
      <div className="user1">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde architecto quos earum quas  </p>
      <div className='profil'>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user1} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />

                </svg>
                <div className="nick"><p className='p1'>NICK SMITH</p>
                <p className='p2'>Feb 23rd, 2024</p>
                
                </div>
                <h6>7.8</h6>
      </div>
      </div>
     <div className="user2">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem nemo perferendis <div className='profil2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user2} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />

                </svg>
                <span className="profile-name">MARY Thomas
                  <span className='date'>Sept 13th 2023</span>
                  </span>
                  <span className='u2count'>9.3</span>
                
      </div></p>
     <div className="next"><a href="">Show all →</a></div>
     </div>
    </div>
  )
}
