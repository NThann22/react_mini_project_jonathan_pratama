import React from 'react'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import { PAGE_URL } from '../../utils/constants'

export default function Customer() {

  return(
    <div className='flex flex-col items-center py-[152px]'>
      <h1 className='pb-[80px] text-[88px] font-bold font-open_sans text-[#F17228]'>WHO ARE YOU?</h1>
        <div className='flex gap-[104px]'>

          <Link to={PAGE_URL.MENU}>
            <Button variant="white">Customer</Button>
          </Link>
          
          <Link to={PAGE_URL.ADMIN}>
            <Button variant="white">Admin</Button>
          </Link>
          
        </div>
    </div>
  )
}