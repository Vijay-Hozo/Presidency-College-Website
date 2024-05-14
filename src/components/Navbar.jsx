import logo from "../assets/images/logo.png"
import rightArrow from "../assets/icons/right-arrow.svg"

const Navbar = () => {


    const navLinks = [{name:"Life@"},{name:"Placements"},{name:"About"}]

  return (
    <div className="flex justify-between items-center p-4 px-10 m-2 border-b-[#DDDDED] border-b-2">
      <img src={logo} alt="logo" className="lg:pl-7"/>
      <ul className="flex gap-16 items-center">
        {
            navLinks.map((item) => {
                return (
                    <li key={item.name}>{item.name}</li>
                )
            })
        }
      </ul>

      <div className="h-12 flex justify-between bg-orange w-48 p-2 rounded-full">
        <button className="text-center w-full text-white font-semibold">Apply now</button>
        <img src={rightArrow} alt="" />
      </div>
    </div>
  )
}

export default Navbar
