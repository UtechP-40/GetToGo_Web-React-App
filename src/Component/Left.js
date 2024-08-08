import React from 'react'
import user3 from './img/user-3.jpg';
import user4 from './img/user-4.jpg';
import user5 from './img/user-5.jpg';
import user6 from './img/user-6.jpg';

export default function Left() {
  return (
    <div className='left'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam recusandae fugit expedita in reiciendis mollitia placeat sed dolorem sequi ab vitae fuga, nemo obcaecati quis voluptas modi blanditiis debitis!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure repudiandae iusto, ut eaque nulla ea mollitia a hic ullam est sint! Laborum ad, ullam cupiditate vel molestiae modi facere!</p>
      <hr />
      <div className="sideBySide">
      <p className="leftText">Close to the beach <br />
                              Free airport shuttle <br />
                              Air conditioning and heating <br />
                              We speak all languages</p>
      <p className="rightText">Close to the beach <br />
                              Free airport shuttle <br />
                              Air conditioning and heating <br />
                              We speak all languages</p>
      </div>
      <hr />
      <div className="profiles">
        <div>
    <p>Lucy and 3 other friends recommmended this hotel</p>
        </div>
        <div className='collection'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user3} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user4} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user5} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 200 200">
                    <defs>
                        <clipPath id="circleClip">
                            <circle cx="110" cy="110" r="95" />
                        </clipPath>
                    </defs>
                    <circle r="83" cx="100" cy="100" fill="red" />
                    <image href={user6} x="3" y="1" height="220px" width="200px" clip-path="url(#circleClip)" />
                </svg>
                </div>
      </div>
    </div>
  )
}
