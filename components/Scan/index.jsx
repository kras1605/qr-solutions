import React, { useEffect, useState } from 'react'
import { QrCodeScanner } from './QRCodeScanner'

const Index = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted &&
    <div className='flex-grow  text-center p-4 md:p-8 gap-4 flex flex-col '>
      <div className='flex justify-center items-center '>
        <QrCodeScanner/>
      </div>
    </div>
  )
}

export default Index