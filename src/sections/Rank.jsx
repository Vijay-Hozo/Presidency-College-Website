import rank from "../assets/images/ranked.png"
const Rank = () => {
  return (
    <div className="p-14 px-16 mt-16">

        <div className="p-10 py-14 text-white w-full bg-yellow rounded-2xl">
            <div className="flex gap-2 items-baseline">
                <p className="text-[170px] leading-[200px]">Ranked#11</p>
                <img src={rank} alt="" className=""/>
            </div>
            <p className="text-[40px] font-[500]">India’s Top-ranked private autonomous ASC colleges (2024)</p>
        </div>
    </div>
  )
}

export default Rank
