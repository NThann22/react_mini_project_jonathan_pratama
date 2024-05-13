import React from 'react'
import Rendang from '../../image/recomend_rendang.png'
import Nasgor from '../../image/recomend_nasgor.png'
import Escampur from '../../image/recomend_escampur.png'
import Button from '../../components/button'
import { Link } from 'react-router-dom';
import { PAGE_URL } from '../../utils/constants';

export default function Recomendation() {

  return (
    <div className='flex flex-col justify-center items-center py-[72px] gap-20'>
      <h1 className='pb-[71px] font-bold font-open_sans text-[43px] text-[#F17228]'>Rekomendasi Menu Restoran Kami</h1>

        <div className='flex justify-between items-center w-[1480px] h-[512px] rounded-lg shadow-md'>
          <div className="flex flex-col justify-center px-8">
            <div className="pb-12 pt-14 px-14">
              <h1 className="font-open_sans text-black text-5xl font-bold mb-[19px]">Wajib coba <span className='text-[#FFB30E]'>Rendang Sapi</span></h1>
              <p className="text-[#61616169] font-open_sans text-lg">Nikmati kelezatan autentik Rendang Sapi Minang yang menggoda selera dengan rempah-rempah khas Minang.</p>
            </div>
            <div className='pb-12 px-12'>
              <Link to={PAGE_URL.MENU}>
                <Button variant="primary">Pesan Sekarang</Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-[961px] h-[512px]">
            <img src={Rendang} alt='Rendang' className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>

        <div className='flex justify-between items-center w-[1480px] h-[512px] rounded-lg shadow-md'>
          <div className="flex-shrink-0 w-[961px] h-[512px]">
            <img src={Nasgor} alt='Rendang' className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className="flex flex-col justify-center px-8">
            <div className="pb-12 pt-14 px-14">
              <h1 className="font-open_sans text-black text-5xl font-bold mb-[19px]">Makan santai dengan <span className='text-[#FFB30E]'>Nasi Goreng</span></h1>
              <p className="text-[#61616169] font-open_sans text-lg">Nikmati kelezatan autentik Rendang Sapi Minang yang menggoda selera dengan rempah-rempah khas Minang.</p>
            </div>
            <div className='pb-12 px-12'>
              <Link to={PAGE_URL.MENU}>
                <Button variant="primary">Pesan Sekarang</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center w-[1480px] h-[512px] rounded-lg shadow-md'>
          <div className="flex flex-col justify-center px-8">
            <div className="pb-12 pt-14 px-14">
              <h1 className="font-open_sans text-black text-5xl font-bold mb-[19px]">Haus dan lapar? Cobain <span className='text-[#FFB30E]'>Es Campur</span></h1>
              <p className="text-[#61616169] font-open_sans text-lg">Santap Es Campur segar nan lezat untuk mengakhiri hidangan Anda dengan manisnya.</p>
            </div>
            <div className='pb-12 px-12'>
              <Link to={PAGE_URL.MENU}>
                <Button variant="primary">Pesan Sekarang</Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-[961px] h-[512px]">
            <img src={Escampur} alt='Rendang' className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>

    </div>
  );
}

