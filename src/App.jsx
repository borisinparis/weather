import { useEffect, useState } from 'react'
import './App.css'
import SearchBottom from './icons/search.jsx'
import Location from './icons/location.jsx'
import "./photos"
import Heart from './icons/heart.jsx'
import User from './user.jsx'
import Pin from './pin.jsx'
import Home from './home.jsx'
import Logo2 from './icons/logo2.jsx'
import Logo1 from './icons/logo1.jsx'
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
      <div className= "m-0 p-0 flex box-border w-full h-[1000px] bg-[#F3F4F6] ">
      <div className="absolute z-2 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[140px] w-[140px]">
      <div className='flex relative justify-center items-center rounded-full gap-[20px] m-auto w-[138px] h-[138px] bg-[#F3F4F6]'>
      <div className=''><Logo2/></div>
      <div className=''><Logo1/></div> </div>
      </div>
      {/* <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[340px] w-[340px]">
      <div className='w-[250px] m-auto mt-[45px] h-[250px] absolute z-3 bg-[#F3F4F6]'></div>
      <div className='w-[110px] h-[110px] absolute z-4 top-[1px] left-[168px] rounded-[50%] bg-black'></div>
      <div className='w-[110px] h-[110px] absolute z-4 top-[230px] left-[168px] rounded-[50%] bg-black/95'></div>
      </div> */}
      <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[540px] w-[540px]"></div>
      <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[940px] w-[940px]"></div>
      <img src="Ellipse 21.png" className='w-[180px] h-[180px] absolute z-2 top-[110px] left-[70px]' />
      <img src="Ellipse 22.png" className='w-[180px] h-[180px] absolute z-2 top-[800px] left-[1050px]' />
        {/* left-main */}
        <div className='w-1/2 relative h-full'>
        {/* search button */}
        <div className='w-[400px] h-[70px] bg-[white] m-auto mt-[50px]'>
          <div className='flex w-[400px] rounded-[10px] absolute z-20'>
        <label className='m-auto' for="fname" ><SearchBottom/></label>
        <input value={searchValue} onChange={onChange} placeholder='Search' className="m-auto w-[350px] h-[58px] rounded-[20px] text-3xl border-none;" type='search'/> </div> {
          filteredData.map((el) =><div className='w-[380px] flexh-[70px] bg-white/95 backdrop-blur-[10px] m-auto mt-[50px] absolute z-30'>
            <label className='m-auto for="fname'><Location/></label>
          <input className='m-auto absolute z-30 w-[380px] h-[40px] text-4xl' key={el}/>
          <p className='text-black absolute z-30 inline' key={el}>{el}</p> </div>
        )}
        </div>
        {/* left main board */}
        <div className=' relative z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px] '>
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
        <div className='w-1/2 h-full bg-black/95'>
        <div className='w-[600px] h-[60px] mt-[50px]'></div>
        {/* rigth main board */}
        <div className='relative z-20 w-[400px] h-[800px] rounded-[40px] mt-[10px] m-auto backdrop-blur-[10px] bg-black/40]'>
          <p className='text-gray-400 text-xl ml-[40px]'>September 10,2025</p>
          <div className='flex justify-space'>
          <h2 className='text-[60px] text-white ml-[40px]'>Krakow</h2>
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
