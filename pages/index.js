import Image from 'next/image'
import shipment from '../public/shipment.jpg'

export default function Home() {
  return (
      <div className="bg-gray-300 flex md:flex py-20 grid md:grid grid-cols-3 md:grid-cols-3">
      <div className="flex flex-col items-center">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
      </div>
      <div>
      <h1>FREE SHIPPING</h1>
      </div>
      <div>
      <p>Same day shipping is included on all the orders</p>
      </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      </div>
      <div>
        <h1>30-Day Guarantee</h1>
      </div>
      <div>
        <p>covers any damages that renders your tights unwearable</p>
      </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        </div>
        <div>
          <h1>STRENGTH TESTED</h1>
        </div>
        <div>
          <p>Rated 5 stars by thousands of customers</p>
        </div>
      </div>
      </div>
  )
}
