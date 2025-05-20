import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
    href='https://api.whatsapp.com/send?phone=541123456789'
    className='fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='WhatsApp'
    >
      <FaWhatsapp className='text-4xl' />
    </a>

  )
}

export default WhatsAppButton