import { Link } from "react-router-dom"

import { IoMdArrowDroprightCircle } from "react-icons/io";

function Navbar() {
  return (
    <div className='flex items-center justify-evenly pt-5'>
        <h1 className="font-bold size-36px">ZOKA</h1>
          
       <ul className="flex items-center gap-8">
          <Link to={Navbar}>Home</Link>
          <Link >Pages</Link>
          <Link >Photograpy</Link>
          <Link >Photoshoots</Link>
       </ul>
       <button className="flex border-4 w-36.5 h-57px rounded-3xl text-[#3F41A6] items-center justify-center  gap-1">Youtube <IoMdArrowDroprightCircle size={20}/></button>
    </div>
    
  )
}

export default Navbar