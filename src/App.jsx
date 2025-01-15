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
import { getAllCities } from './utils/get-all-cities.js'
function App() {
  const [searchValue,setSearchValue] =useState("")
  const [filteredData,setFilteredData]=useState([])
  const [allCities,setAllCities] =useState([])
  const [selectedCities,setSelectedCities] = useState("Ulaanbaatar, Mongolia")
  const [weatherData,setWeatherData]= useState({})
  const [isLoading,setIsLoading] =useState(false)


  const weatherApiKey = "83e4cc7cbde84beea0091244251501"

  const onChange =(event) => {
    setSearchValue(event.target.value);
    const filtered = allCities
    .filter((el) => el.toLowerCase().startsWith(searchValue.toLowerCase()))
    .slice(0, 5)
    setFilteredData(filtered)
  
    
  }

  const getCountries = async() =>{
    try{
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const result = await response.json();
      const countries =result.data
      const cities = getAllCities(countries)
      setAllCities(cities)

    } catch (error) {
      console.log(error);
      
    }
    finally {

    }
    

  }
  const getWeatherData = async() => {
    setIsLoading(true)
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCities}`)
      const result = await response.json();
      setWeatherData(result)
      console.log(result);
      
      
      
    } catch(error) {
      console.log(error);
      
    }
    finally {
      setIsLoading(false)
    }
  }

   const clickedTarget = (city) => {
  setSelectedCities(city)
  console.log(weatherData.forecast);
  
    
    

  }
  useEffect(()=>{
    getWeatherData()

  },[selectedCities])
  useEffect(() => {
    getCountries();
  },[])

  if(isLoading) {
    return <p> loading ...</p>
  }
  return (
    <>
    {/* main-content */}
      <div className= "m-0 p-0 flex box-border w-full h-[1280px] bg-[#F3F4F6] ">
      <div className="absolute z-2 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[140px] w-[140px]">
      <div className='flex relative justify-center items-center rounded-full gap-[20px] m-auto w-[138px] h-[138px] bg-[#F3F4F6]'>
      <div className=''><Logo2/></div>
      <div className=''><Logo1/></div> </div>
      </div>
      <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[340px] w-[340px]"></div>
      <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[540px] w-[540px]"></div>
      <div className="absolute z-1 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full h-[940px] w-[940px]"></div>
      <img src="Ellipse 21.png" className='w-[180px] h-[180px] absolute z-2 top-[10%] left-[12%]' />
      <img src="Ellipse 22.png" className='w-[180px] h-[180px] absolute z-2 top-[80%] left-[80%]' />
        {/* left-main */}
        <div className='w-1/2 relative h-full'>
        {/* search button */}
        <div className='w-[400px] h-[80px] rounded-[40px] absolute left-[80%] bg-[white] m-auto mt-[50px]'>
          <div className='flex w-[400px] mt-[10px] rounded-[20px] absolute z-20'>
        <label className='m-auto' for="fname" ><SearchBottom/></label>
        <input value={searchValue} onChange={onChange} placeholder='Search' className="m-auto w-[350px] h-[58px] rounded-[20px] text-3xl border-none;" type='search'/> </div>         </div>
        {
          filteredData.map((el) =>
          <div onClick={()=>{clickedTarget(el)}} className='text-black relative w-[400px] h-[80px] bg-white/95 left-[82%] top-[10%]' key={el}>{el}</div> 
        )}
                {/* left main board */}
        <div className=' absolute left-[30%] top-[8%] z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px] '>
          <p className='text-gray-400 text-[18px] ml-[40px]'>{weatherData.forecast}</p>
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
          <p className='text-gray-400 text-[18px] ml-[40px]'>September 10,2025</p>
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
