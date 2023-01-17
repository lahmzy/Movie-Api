import React from "react";
import { useState,useEffect } from "react";
import "./index.css";


function App() {

  const [endPoint,setEndpoint] = useState("")
  const [container,setContainer] = useState([])
  const [finalPoint,SetFinalPoint] = useState("")

  useEffect ( () => {
    fetchMe()
  },[finalPoint])

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cab7303dbmsh130423546a91be8p1d56fdjsne3f3c5d61f5d',
		'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
	}
};



  const fetchMe = async () => {
    try{
    const response = await  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=+${endPoint}&search_type=1`, options)
      const data = await response.json()

     
      console.log(data)
      
      setContainer(data.results)
    } catch(error){
      console.log(error);
    }
    
  }
    const handleChange = (e) => {
      setEndpoint(e.target.value)
    }
    
    const submitHandler = (e) => {
      e.preventDefault()
      SetFinalPoint(endPoint)
    }

  return (
    <div className="w-full mt-2 app ">
      <h1 className='text-gray-500 text-lg mb-2 text-center font-Poppins font-bold'>Project Rabid</h1>
      <form onSubmit={submitHandler} className="flex justify-center items-center px-2">
        <input className="border-2 poppins rounded-lg w-[700px] p-[5px]" type="text" onChange={handleChange} value={endPoint} placeholder="Enter name of movie" />
        <button className="ml-2 border p-[5px] hover:bg-blue-400  rounded-lg border-gray-500 bg-purple-400 font-poppins" type="submit">Submit</button>
      </form>
      
      <div className="flex px-2 mt-4 pt-2 flex-wrap max-w-full items-center justify-between gap-[1rem]">
      { container.map ( (item,index) => {
        
        return (
          <div className="h-[400px] lg:w-[24%] w-[48%] md:w-[32%] flex flex-col border-[2px] border-solid border-gray-700 rounded-[4px] my-0 mx-auto" key={index}>
              {item &&<img className="w-[100%] items-center h-[65%] object-cover" src={item.image_url} alt="Image not available" />}
            <div className="pt-5">
               <p className=" font-poppins font-semibold text-center p-2 mt-3 my-0 mx-auto semi-bold">{item.name}</p>
               <p className="className= font-poppins font-semibold text-center p-2 mt-3 my-0 mx-auto semi-bold">{item.year}</p>
            </div>
          </div>
          
        )
      }) }

      </div>
    


    </div>
  )
}

export default App
