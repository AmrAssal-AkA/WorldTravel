import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/carousal/First.jpg'
import image2 from '../assets/carousal/second.jpg'
import image3 from '../assets/carousal/third.jpg'
import CardImg1 from '../../src/assets/Cards/Trip1.jpeg'
import CardImg2 from '../../src/assets/Cards/Trip2.jpg'
import CardImg3 from '../../src/assets/Cards/Trip3.jpeg'



export function CarouselHolder(){
  return (
      <Carousel >
      <div>
        <img src={image1} alt='Carousel image 1 reference to Company Banner '/>
      </div>
      <div>
        <img src={image2} />
      </div>
      <img src={image3} />
    </Carousel>
  )
}

export function TripCustomize(){
  return (
      <div className=' bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-7xl mx-auto my-10'>
      <h1 className='text-2xl font-bold text-center text-gray-800 mb-8'> Custimize your Trip </h1>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-6" '>
        <div className='relative'>
        <label className='block text-sm font-semibold text-gray-600 mb-1'>from : <input type='text' className='border-1 border-black w-40' placeholder='your Cantory'/> </label>
        <label className='rblock text-sm font-semibold text-gray-600 mb-1'>To : <input type='text' className='border-1 border-black' placeholder='the contury you want to go ?'/></label> 
        </div>
        <div>
        <label className='"block text-sm font-semibold text-gray-600 mb-1'>Price Category : 
          <select className='border-1 border-black row-span-2 row-start-1'>
          <option value="standard trip">standard trip 500-1500 $</option>
          <option value="Business trip">business trip 2000-4000$</option>
          <option value="VIP trip">VIP trip 4000-6000$</option>
          </select>
        </label>
        </div>
        <div>
        <label >flight date : <input type='date' className='w-50 p-2 pl-10 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/></label>
        </div>
        <div>
        <label >Number of days : <input type='number'  className="w-50 p-2 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='2 days'/></label>
        </div>
        <div className='md:col-span-2"'>
        <button type='submit'className='w-50 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-1 rounded-lg transition-colors mt-4'>Finish Booking</button>
        </div>
      </form>
    </div>
  )
}

export function CardHolder(){
return(
  <>
    <h1 className='text-center underline'>Here's are some Packages we offer</h1>
    <div className='grid grid-cols-3 lg:ml-25'>
    <div className='card '>
    <img  src={CardImg1} alt='A photo of dubai trip' className='card-image'/>
    <h2 className='card-title'>Dubai Trip Pacakage</h2>
    <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa</p>
    </div>
        <div className='card '>
    <img  src={CardImg2} alt='A photo of dubai trip' className='card-image'/>
    <h2 className='card-title'>Paris Trip Pacakage</h2>
    <p>Paris is the capital of the country of France. It has long been one of western Europe's major centers of culture and business. Some of the world's greatest artists, writers, scholars, fashion designers</p>
    </div>
    <div className='card'>
    <img  src={CardImg3} alt='A photo of dubai trip' className='card-image'/>
    <h2 className='card-title'>NewYork Trip Pacakage</h2>
    <p>Visiting New York City offers a chance to experience world-class entertainment on Broadway, explore renowned museums, relax in Central Park's greenery, and marvel at the iconic Statue of Liberty.</p>
    </div>
    </div>
  </>
)
}

export function About(){
  return (
  <>
  
  <div className=' bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-7xl mx-auto my-10'>
    <h2 className='text-center underline'>About the Company </h2>
  <p className='text-2xl'>
    WorldTravel – Explore the World with Us <br />
    At WorldTravel, we believe that travel is more than just a journey — it's an experience that should inspire, excite, and transform. As a premier travel company, we specialize in creating personalized travel experiences tailored to your interests, lifestyle, and budget.
    Whether you're dreaming of a relaxing beach escape, an adventurous trek through the mountains, or a cultural immersion in a new city, WorldTravel is your trusted partner. Our expert team offers end-to-end travel solutions including flights, hotels, guided tours, travel insurance, and 24/7 customer support.
    With a global network of partners and a passion for exceptional service, WorldTravel makes your dream destinations more accessible than ever. Let us handle the details — all you need to do is pack your bags and get ready to explore the world.
  WorldTravel – Your journey starts here.
  </p>
  </div>
  </>
  )
}


function Home() {
return (
<div className='HomePage'>
    <CarouselHolder />
    <TripCustomize />
    <CardHolder />
    <About />
</div>
)
}

export default Home