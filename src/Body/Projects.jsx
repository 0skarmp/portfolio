import dni from "../assets/images/dni.jpg";
import pokedex from '../assets/images/pokedex1.png'
import logo from '../assets/images/logo.png'
import { Link, Element } from "react-scroll";


function Projects() {
  return (
    <>
    <Element name="Projects-section">
      <h1 className="flex justify-center mt-16 text-4xl  md:text-5xl lg:text-7xl font-salsa mb-20  text-black text-shadow-lg shadow-gray-950 ">PROJECTS </h1>
    <div className="flex flex-wrap justify-evenly space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-2">
      <div class="w-52 h-72 lg:w-80 lg:h-96 bg-green-100 border-x-4 border-y-2 border-green-500  rounded-3xl text-black  p-4 
      flex flex-col items-start justify-center gap-3 hover:bg-zinc-400 transparent hover:shadow-2xl hover:shadow-sky-800 transition-shadow">
   <img src={dni} alt="" /> 
  <div class="">
      <p class="font-extrabold">UBIGEO</p>
     
      <p class="text-sm">project where you can find the total number of people in all the places in Peru</p>
  </div>
 <a href="https://0skarmp.github.io/FirstProjectByGroup/" target="_blank"> <button  class="bg-indigo-400 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Link To Code</button></a>
</div>
      <div class="w-52 h-72 lg:w-80 lg:h-96 bg-green-100 border-x-4 border-y-2 border-green-500  rounded-3xl text-black  p-4 
      flex flex-col items-start justify-center gap-3 hover:bg-zinc-400 transparent hover:shadow-2xl hover:shadow-sky-800 transition-shadow">
   <img src={pokedex} alt="" /> 
  <div class="">
      <p class="font-extrabold">POKEDEX</p>
     
      <p class="text-sm">project about html and css</p>
  </div>
 <a href="https://0skarmp.github.io/Basic-Pokedex/" target="_blank"> <button  class="bg-indigo-400 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Link To Code</button></a>
</div>
      <div class="w-52 h-72 lg:w-80 lg:h-96 bg-green-100 border-x-4 border-y-2 border-green-500  rounded-3xl text-black  p-4 
      flex flex-col items-start justify-center gap-3 hover:bg-zinc-400 transparent hover:shadow-2xl hover:shadow-sky-800 transition-shadow">
   <img src={logo} alt="" /> 
  <div class="">
      <p class="font-extrabold">HOTEL VIRTUAL ASISTANT</p>
     
      <p class="text-sm">Finall project. App to help the guest in the room with orders </p>
  </div>
 <a href="https://juanrcoder.github.io/Project-Landing_HVA/" target="_blank"> <button  class="bg-indigo-400 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Link To Code</button></a>
</div>
</div>
</Element>      
    </>
  );
}

export default Projects;

