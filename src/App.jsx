
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState } from "react"
function App() {
  const data=[{
    image:"https://images.unsplash.com/photo-1729761137674-9a3a841f7cea?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"flash-back",artist:"Utkarsh",added:false
  },
  {
    image:"https://images.unsplash.com/photo-1728574111706-20a21247ff4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Builder",artist:"Jack-john",added:false
  },
  {
    image:"https://images.unsplash.com/photo-1729558524663-73758375625d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Old-house",artist:"Ramson",added:false
  }
  ]
  const [songData, setsongData] = useState(data)

  const handleClick=(index)=>{
    setsongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex===index) return {...item, added:!item.added}
        return item;
      })
    })

  }

  return (
    <>
    <Navbar data={songData}></Navbar>
    <div className=" px-20 flex gap-2 flex-wrap"> 
      {songData.map((obj,index)=>(
        <Card data={obj} handleClick={handleClick} index={index} key={index}/>
      ))}
  
       </div>
  
    </>
  )
}

export default App
