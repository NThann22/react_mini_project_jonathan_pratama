import React from 'react';
import instagram from '../../image/insta.png'
import facebook from '../../image/facebook.png'
import twitter from '../../image/twitter.png'
import Button from '../button'

export default function Footer() {

  return(
    <footer className="bg-[#212121] px-[220px] py-[106px]">
      <div className="flex justify-between gap-[390px]">
        <div className="grid grid-cols-3 pb-[63px] text-white gap-[116px]">
          <div className="grid grid-col pb-[68px]">
            <h1 className="font-open_sans font-bold text-[22px] mb-[40px]">Company</h1>
            <div className="grid grid-col gap-4 font-open_sans font-extralight">
              <a href="#">About us</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="grid grid-col pb-[102px]">
            <h1 className="font-open_sans font-bold text-[22px] mb-[40px]">Contact</h1>
            <div className="grid grid-col gap-4 font-open_sans font-extralight">
              <a href="#">Help & Support</a>
              <a href="#">Partner with us</a>
              <a href="#">Ride with us</a>
            </div>
          </div>
          <div className="grid grid-col pb-[68px]">
            <h1 className="font-open_sans font-bold text-[22px] mb-[40px]">Legal</h1>
            <div className="grid grid-col gap-4 font-open_sans font-extralight">
              <a href="#">Terms & Conditions</a>
              <a href="#">Refund & Cancellation</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="grid grid-col gap-[43px] mb-[63px]">
          <div className="font-open_sans font-bold text-lg text-[#f5f5f5]">
            <h1 className='pb-[40px]'>FOLLOW US</h1>
            <div className='flex gap-4'>
              <a href='#'>
                <img src={instagram} alt="Instagram" />
              </a>
              <a href='#'>
                <img src={facebook} alt="Facebook" />
              </a>
              <a href='#'>
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="font-open_sans font-bold text-lg text-[#f5f5f5]">
            <h1 className='pb-[40px]'>Receive exclusive offers in your mailbox</h1>
            <div className='flex gap-4'>
              <input 
              className="w-[334px] text-lg px-4 py-4 rounded-lg font-open_sans bg-[#424242] text-[#ADADAD]"
              type='email'
              placeholder='Enter Your Email'
              />
              <Button variant="primarymini">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#424242] border-t-2 w-full"/>

      <div className="flex justify-between py-4">
        <h1 className="text-white">All rights Reserved <span className="font-bold">©Rasa Nusantara, 2024</span></h1>
        <h1 className="text-white">Design by <span className="font-bold">Themewagon</span></h1>
      </div>
    </footer>
  )
}
