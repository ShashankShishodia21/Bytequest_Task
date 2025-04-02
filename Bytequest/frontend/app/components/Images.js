import React from 'react'
import bag1 from "@/public/images/Group1.png"
import bag2 from "@/public/images/Group2.png"
import bag3 from "@/public/images/Group3.png"
import bag4 from "@/public/images/Group4.png"
import bag5 from "@/public/images/Group5.png"
import bag6 from "@/public/images/Group6.png"
import bag7 from "@/public/images/Group7.png"
import bag8 from "@/public/images/Group8.png"
import Image from 'next/image'

const Images = () => {
  return (
    <div className='main-images'>
        <Image src={bag1} alt="Bag Image" width={80} height={80} />
        <Image src={bag2} alt="Bag Image" width={80} height={80} />
        <Image src={bag3} alt="Bag Image" width={80} height={80} />
        <Image src={bag4} alt="Bag Image" width={80} height={80} />
        <Image src={bag5} alt="Bag Image" width={80} height={80} />
        <Image src={bag6} alt="Bag Image" width={80} height={80} />
        <Image src={bag7} alt="Bag Image" width={80} height={80} />
        <Image src={bag8} alt="Bag Image" width={80} height={80} />
    </div>
  )
}

export default Images