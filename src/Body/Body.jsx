import oskar from "../assets/images/paris.jpeg";
import { Link, Element } from "react-scroll";

function Body() {
  return (
    <>
    <Element name="About-section" className="element">
      <div className="flex mt-10 justify-around items-center">
        <p className="text-sm px-2 font-semibold md:text-2xl md:px-20  lg:text-3xl">
          Hello, <b> I'm Oskar</b> <br />
          A web designer and developer from Lima, Peru.
          <br />I really like to improve my skills and get better every day..!!
          <div className="ml-20 mt-10 md:ml-60 md:mt-10 lg:ml-60 lg:mt-10 xl:ml-96 xl:mt-12 ">
            <a href="https://docs.google.com/document/d/1p3yRQzyPTCfkoP1yEGyjQbWMC7BkQ394_BOTgSWRidM/edit?usp=sharing" target="_blank">
              {" "}
              <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                Download{" "}
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-slate-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-slate-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                <span class="absolute w-36 h-32 -top-8 -left-2 bg-slate-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                  my CV !!
                </span>
              </button>
            </a>
          </div>
        </p>
        <img
          className="rounded-full w-40 md:w-64 md:py-4 md:pl-2 lg:w-80"
          src={oskar}
          alt="developer"
        />
      </div>
      </Element>
    </>
  );
}

export default Body;
