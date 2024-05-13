import React from 'react'
import Menu from '../../image/menu.png'
import Serve from '../../image/serve.png'
import Invoice from '../../image/invoice.png'

export default function OrderSystem() {

  return(
    <div className="flex flex-col items-center py-[80px] bg-gradient-to-b from-[#ffcf6723] to-[#fdedca00]">
      <h1 className='pb-[71px] font-bold font-open_sans text-[43px] text-[#F17228]'>Bagaimana Cara kerjanya?</h1>
      <div className="grid grid-cols-3 gap-8 px-[467.5px]">

        <div className="flex flex-col items-center">
          <img
          src={Menu}
          alt="Menu"
          className="w-[87px] h-[112px]"
          />
          <div className="text-center">
            <h1 className='font-open_sans font-bold text-[22px] mb-[10px]'>Pilih Menu</h1>
            <p className='text-[#9E9E9E] font-open_sans text-lg'>Pilih menu yang sudah kami siapkan sesuai kesukaan anda.</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Invoice}
            alt="Invoice"
            className="w-[72,19px] h-[112px]"
            />
          <div className="text-center">
            <h1 className='font-open_sans font-bold text-[22px] mb-[10px]'>Bayar di Kasir</h1>
            <p className='text-[#9E9E9E] font-open_sans text-lg'>Setelah pesan, anda bisa bayar di kasir dengan cash atau bank.</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Serve}
            alt="Serve"
            className="w-[112px] h-[112px]"
            />
            <div className="text-center">
              <h1 className='font-open_sans font-bold text-[22px] mb-[10px]'>Makanan Siap</h1>
              <p className='text-[#9E9E9E] font-open_sans text-lg'>Makanan akan disajikan kepada anda.</p>
            </div>
        </div>

      </div>
    </div>
  )
}