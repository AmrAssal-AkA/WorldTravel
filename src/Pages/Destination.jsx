import React from 'react'
import Destination1 from '../assets/Destination Page/trip4.jpg';
import Destination2 from '../assets/Destination Page/trip5.jpg';
import Destination3 from '../assets/Destination Page/trip3.jpg';
import Destination4 from '../assets/Destination Page/trip1.jpeg';
import Destination5 from '../assets/Destination Page/trip2.jpg';
import Destination6 from '../assets/Destination Page/trip6.jpg';


function Destination() {
  return (
    <div>
      <h2 className='text-center text-3xl'>Top Destinations </h2>
        <div className='grid grid-cols-3 md:ml-10 mt-15 '>
            <div className='card '>
            <img  src={Destination1} alt='A photo of Maldieves trip' className='card-image'/>
            <h2 className='card-title'>Maltieves trip</h2>
            <p>A trip to the Maldives can be a fantastic experience, offering stunning beaches, vibrant marine life, and luxurious resorts. </p>
            </div>
                <div className='card '>
            <img  src={Destination2} alt='A photo of Jaban trip' className='card-image'/>
            <h2 className='card-title'>Japan Trip</h2>
            <p>Our Japan package tours are thoughtfully designed to provide you with an unforgettable experience where you’ll discover the best of this iconic destination. Visit renowned Japanese destinations and attractions with expert local tour guides .</p>
            </div>
            <div className='card'>
            <img  src={Destination3} alt='A photo of NewYork trip' className='card-image'/>
            <h2 className='card-title'>NewYork Trip Pacakage</h2>
            <p>Visiting New York City offers a chance to experience world-class entertainment on Broadway, explore renowned museums, relax in Central Park's greenery, and marvel at the iconic Statue of Liberty.</p>
            </div>
            </div>
              {/* -------------------- */}
                  <div className='grid grid-cols-3 md:ml-10'>
            <div className='card '>
            <img  src={Destination4} alt='A photo of dubai trip' className='card-image'/>
            <h2 className='card-title'>Dubai Trip Pacakage</h2>
            <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa</p>
            </div>
                <div className='card '>
            <img  src={Destination5} alt='A photo of dubai trip' className='card-image'/>
            <h2 className='card-title'>Paris Trip Pacakage</h2>
            <p>Paris is the capital of the country of France. It has long been one of western Europe's major centers of culture and business. Some of the world's greatest artists, writers, scholars, fashion designers</p>
            </div>
            <div className='card'>
            <img  src={Destination6} alt='A photo of dubai trip' className='card-image'/>
            <h2 className='card-title'>Egypt Trip Pacakage</h2>
            <p>A trip to Egypt is a journey through millennia, where ancient wonders stand beside the vibrant pulse of modern life. It's a land of epic landscapes, from the life-giving Nile River to the vast desert sands and the brilliant coral reefs of the Red Sea..</p>
            </div>
            </div>

                    <div className='grid grid-cols-3 md:ml-10 mb-15'>
            <div className='card '>
            <img  src={Destination3} alt='A photo of Pairs trip' className='card-image'/>
            <h2 className='card-title'>Dubai Trip Pacakage</h2>
            <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa</p>
            </div>
                <div className='card '>
            <img  src='' alt='A photo of dubai trip' className='card-image'/>
            <h2 className='card-title'>Paris Trip Pacakage</h2>
            <p>Paris is the capital of the country of France. It has long been one of western Europe's major centers of culture and business. Some of the world's greatest artists, writers, scholars, fashion designers</p>
            </div>
            <div className='card'>
            <img  src='' alt='A photo of dubai trip' className='card-image'/>
            <h2 className='card-title'>NewYork Trip Pacakage</h2>
            <p>Visiting New York City offers a chance to experience world-class entertainment on Broadway, explore renowned museums, relax in Central Park's greenery, and marvel at the iconic Statue of Liberty.</p>
            </div>
            </div>
    </div>
  )
}

export default Destination