import React, { useState } from 'react'

const Shops = () => {
  const [shop, setShop] = useState({
    Name: '',
    Image: '',
    WebsitePath: '',
  })
  return (
    <div>
      <input value={shop.Name} type="text" name="" id="" onChange={(e) => {
        setShop({ ...shop, Name: e.target.value })
      }} />
    </div>
  )
}

export default Shops
