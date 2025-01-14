import { useEffect, useState } from 'react'
import './App.css'
import SearchBottom from './icons/search.jsx'
import Location from './icons/location.jsx'
import "./photos"
import Heart from './icons/heart.jsx'
import User from './user.jsx'
import Pin from './pin.jsx'
import Home from './home.jsx'
function App() {
  // const [count, setCount] = useState(0)
  const [searchValue,setSearchValue] =useState("")
  const [filteredData,setFilteredData]=useState([])

  const allCities = ["UB Mongolia", "Seoul Korea", "Japan Tokyo"];

  const onChange =(event) => {
    setSearchValue(event.target.value)
  
    
  }
  useEffect(() => {
    if(!searchValue) {
      setFilteredData([])
    } else {
    const filtered = allCities.filter((el)=> el.includes(searchValue));
    console.log(filtered);
    setFilteredData(filtered);
   }
    
  }, [searchValue])

  return (
    <>
    {/* main-content */}
      <div className= "m-0 p-0 flex box-border w-screen h-screen bg-[#F3F4F6] ">
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[140px] w-[140px]"></div>
      <div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[340px] w-[340px]"></div>
      <div class="absolute z-10 top-1/2 overflow-hidden left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[540px] w-[540px]"></div>
      <div class="absolute z-10 top-1/2 overflow-hidden left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[940px] w-[940px]"></div>
        {/* left-main */}
        <div className='w-1/2 relative h-full bg-white/75 backdrop-blur-lg'>
        <div className='w-[500px] h-[70px] bg-[white] m-auto mt-[50px]'>
        <label className='m-auto' for="fname" ><SearchBottom/></label>
        <input value={searchValue} onChange={onChange} placeholder='Search' className="m-auto w-[400px] h-[58px] text-4xl border-none;" type='search'/> {
          filteredData.map((el) =><div className='w-[500px] flex h-[70px] bg-[white] m-auto mt-[50px] absolute z-40'>
            <label className='m-auto for="fname'><Location/></label>
          <input className='m-auto w-[400px] h-[58px] text-4xl' key={el}/>
          <p className='text-black inline' key={el}>{el}</p> </div>
        )}
        </div>
        <div className=' relative w-[400px] h-[80%] bg-[white] mt-[10px] m-auto rounded-[40px] bg-white/75 backdrop-blur-lg '>
          <p className='text-gray-400 text-xl ml-[40px]'>September 10,2025</p>
          <div className='flex justify-space'>
          <h2 className='text-[60px] ml-[40px]'>Krakow</h2>
            <div><Location/></div> </div>
        <div> <img src="./sun1.png" className='w-[300px] m-auto' /></div>
        <h1 className='text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]'>26˚</h1>
        <p className='text-yellow-500 ml-[40px]' >Sunny</p>
        <div className='flex justify-around mt-12'>
          <div><Home/></div>
          <div><Heart/></div>
          <div><User/></div>
          <div><Pin/></div>
          </div>


        </div>
        </div>
        {/* rigth-main */}
        <div className='w-1/2 h-full bg-[black]'>
        <div className='w-[600px] h-[60px] mt-[50px]'></div>
        <div className='relative z-30 w-[400px] h-[80%] bg-[white] rounded-[40px] mt-[10px] m-auto backdrop-blur-lg bg-gradient-to-b from-[#1F2937] to-[#111827]'>
          <p className='text-gray-400 text-xl ml-[40px]'>September 10,2025</p>
          <div className='flex justify-space'>
          <h2 className='text-[60px] ml-[40px]'>Krakow</h2>
            <div><Location/></div> </div>
        <div> <img src="./icon.png" className='w-[300px] m-auto' /></div>
        <h1 className='text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]'>26˚</h1>
        <p className='text-yellow-500 ml-[40px]' >Sunny</p>
        <div className='flex justify-around mt-12'>
          <div><Home/></div>
          <div><Heart/></div>
          <div><User/></div>
          <div><Pin/></div>
          </div>


        </div>
        </div>
</div>
    </>
  )
}

export default App
