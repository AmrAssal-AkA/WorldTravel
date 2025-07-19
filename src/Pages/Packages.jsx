import React from 'react'
import photo1 from '../assets/Packages/trip1.webp';
import photo2 from'../assets/Packages/trip2.jpeg'
import photo3 from '../assets/Packages/Trip3.jpg'
import photo4 from '../assets/Packages/Germany.jpeg'
function Packages() {
  return (
    <>
      <div className='card-vertically'>
      <img src={photo1}  alt='first trip photo' className='w-70'/>
        <div className='card-details'>
        <h2>Dubai Trip package datails</h2>
        <ol type="1" className='text-2xl' >
          <li>Best Hotel in dubai</li>
          <li>A dicumentary book to help you explore</li>
        </ol>
        <button>View more details</button>
        </div>
      </div>
        {/* ------------------ */}
            <div className='card-vertically'>
      <img src={photo2}  alt='first trip photo' className='w-25'/>
        <div className='card-details'>
        <h2>Paris Trip package datails</h2>
        <ol type="1" className='text-2xl'>
          <li>Best Hotel in dubai</li>
          <li>A dicumentary book to help you explore</li>
        </ol>
        <button>View more details</button>
        </div>
        </div>
         {/* ------------------ */} 
    <div className='card-vertically'>
      <img src={photo3}  alt='first trip photo'/>
        <div className='card-details'>
        <h2>New York Trip package datails</h2>
        <ol type="1" className='text-2xl'>
          <li>Best Hotel standing</li>
          <li>A documentary book to help you explore the city</li>
        </ol>
        <button>View more details</button>
        </div>
    </div>
     {/* ------------------ */} 
          <div className='card-vertically'>
      <img src={photo4}  alt='first trip photo'/>
        <div className='card-details'>
        <h2>Germany Trip package datails</h2>
        <ol type="1" className='text-2xl'>
          <li>Best Hotel standing</li>
          <li>A dicumentary book to help you explore the city</li>
        </ol>
        <button>View more details</button>
        </div>
    </div>
    </>
  )
}

export default Packages