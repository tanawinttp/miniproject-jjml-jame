import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="flex justify-end bg-slate-500 py-5">
        <button className="mr-[10rem] text-[32px] text-white font-bold"><Link to={'/'}>Home</Link></button>
        <button className="mr-[10rem] text-[32px] text-white font-bold"><Link to={'/signup'}>Sign Up</Link></button>
        <button className="mr-[2rem]  text-[32px] text-white font-bold"><Link to={'/login'}>Login</Link></button>
    </div>
  )
}

export default Nav