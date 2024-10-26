import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='flex justify-between w-full px-20 py-2'>
        <h2>Orange</h2>
        <div className='flex gap-2 p-2 bg-orange-500'>
            <h1>favourites</h1>
            <h3>{data.filter(item=>item.added).length}</h3>
        </div>
      
    </div>
  )
}

export default Navbar
