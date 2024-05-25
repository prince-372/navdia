import React from 'react'
import nvdaCard from "../assets/image/png/nvdaCard.png"

const Nvda = () => {
  return (
    <div>
        <div className=' container px-3 mx-auto'>
          <div className="grid grid-cols-2">
     <div>
        <img src={nvdaCard} alt="nvdaCard" />
     </div>
          </div>
        </div>
    </div>
  )
}

export default Nvda