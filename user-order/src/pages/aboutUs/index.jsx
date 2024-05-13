import React from 'react';
import Restaurant from '../../image/restoran.png'

export default function AboutUs() {

  return(
    <div className="bg-gradient-to-b from-[#ffcf6723] to-[#fdedca00] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-bold font-open_sans text-[#FFB30E] text-[88px] mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-6">
            <img src={Restaurant} alt="Restoran" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="font-bold font-open_sans text-[43px] text-[#FFB30E] mb-4">Welcome to Rasa Nusantara</h2>
            <p className="font-open_sans text-lg mb-4">
              Rasa Nusantara is a traditional Indonesian restaurant that brings authentic Indonesian flavors to your table.
              We are dedicated to preserving and sharing the rich culinary heritage of Indonesia through our delicious dishes.
            </p>
            <p className="font-open_sans text-lg mb-4">
              Our menu features a wide range of Indonesian delicacies, from savory rendang to refreshing es cendol.
              Each dish is carefully crafted using fresh ingredients and traditional recipes to ensure an unforgettable dining experience.
            </p>
            <p className="font-open_sans text-lg mb-4">
              Whether you're craving for spicy sambal or sweet martabak, Rasa Nusantara has something for everyone.
              Come visit us and embark on a culinary journey through the diverse flavors of Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}