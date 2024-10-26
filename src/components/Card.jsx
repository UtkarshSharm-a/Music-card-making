import React from 'react'

const Card = ({data,handleClick,index}) => {
  const{image,artist,name,added}=data
  return (
    <div className='w-72 mt-10 rounded-sm bg-slate-300  gap-3 flex py-4 p-4 ml-4'>
      <div className='w-20 h-20 bg-red-500'>
        <img className='h-full w-full object-cover ' src={image} alt="" />
      </div>
      <div className=''>
        <h1 className='text-2xl ml-4'>{name}</h1>
        <h3 className='ml-4'>{artist}</h3>
        <button onClick={()=>handleClick(index)} className={`px-2 ml-3 mt-3 py-1 ${added===false ? "bg-orange-500":"bg-teal-600"} text-white rounded-md`}>{added===false ? "Add to favourate":"added"}</button>
      </div>
      
      
    </div>
  )
}

export default Card
