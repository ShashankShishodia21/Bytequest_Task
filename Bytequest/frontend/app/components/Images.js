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
        <Image src="/images/Group1.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group2.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group3.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group4.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group5.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group6.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group7.png" alt="Bag Image" width={70} height={70} />
        <Image src="/images/Group8.png" alt="Bag Image" width={70} height={70} />
    </div>
  )
}

export default Images