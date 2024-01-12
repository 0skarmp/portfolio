import Lottie from "lottie-react"
import instagram from '../assets/SocialMedia1.json'
import twitter from '../assets/SocialMedia2.json'
import github from '../assets/SocialMedia3.json'
import { Link, Element } from "react-scroll";


const Footer = () => {
  return (
    <Element name="Contact-section">
    <div className="lg:mb-20 ">
    <div className="text-3xl md:text-5xl lg:text-5xl flex justify-center font-ab">
        <h1 className=" font-salsa mt-6 md:mt-10 md:mb-10 lg:mt-16 lg:text-7xl  text-black text-shadow-lg shadow-gray-950 ">
           PERSONAL CONTACTS
        </h1>
    </div>
    <div className=" flex justify-around lg:mt-10">
        <div >
            <h1 className="mt-4  md:text-3xl font-ab lg:text-4xl">
                MY CONTACTS
            </h1>
            <div className=" md:text-xl lg:text-3xl lg:mt-16 ">
                <p>
                    Gmail:{" "}
                    <a href="mailto:omoralespj@gmail.com" target="_blanck">
                      omoralespj@gmail.com
                    </a>
                </p>
                <p>
                    WhatsApp:{" "}
                    <a href="https://wa.me/+51924119907" target="_blanck">
                      +51 924 119 907
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/oskarmorales">
                      Oscar Morales
                    </a>
                </p>
            </div>

        </div>
        <div className="mt-4">
            <h1 className="md:text-3xl font-ab lg:text-4xl lg:ml-28"> MY SOCIAL MEDIA</h1>
            <div className="md:text-xl md:ml-10">
            <ul className="flex lg:mt-10">
                <li >
                    <a className="" href="https://twitter.com/omoralespj" target="_blank">
                        {" "}
                        <Lottie className="w-10 mt-4 md:w-20 lg:w-32"
                    animationData={twitter}
                    loop={true}/>

                    </a>
                </li>
                <li>
                    <a href="https://github.com/0skarmp" target="_blank">
                        {" "}
                        <Lottie className="w-16 md:w-28 lg:w-44"
                    animationData={github}
                    loop={true}/>

                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mposkar/" target="_blank">
                    <Lottie className="w-16 md:w-28 lg:w-44"
                    animationData={instagram}
                    loop={true}/>

                    </a>
                </li>
            </ul>
            </div>
        </div>
    </div>
</div>
</Element>
  )
}

export default Footer