const Leftmain = (props) => {
     const {className} = props

    return ( <>
    
    <div className=' absolute left-[30%] top-[8%] z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px] '>
    <p className='text-gray-400 text-[18px] ml-[40px]'>September 10,2025</p>
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
    
</>
)

}
export default Leftmain