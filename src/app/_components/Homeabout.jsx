import { FaPhoneAlt } from "react-icons/fa";

export default function Homeabout(){
    return(
        <section className="overflow-hidden pt-20 pb-16 bg-[url(https://html.kodesolution.com/2024/amiso-php/images/icons/shape.png)] bg-right-top bg-no-repeat">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 static w-full">
                <div className="container grid xl:grid-cols-2 gap-4">
                    <div className="flex justify-center">
                        <img className="animate-fade-in" src="/assets/images/jm.png"/>
                    </div>
                    <div className="animate-fade-right ">
                        <p className="text-xl"><span className="text-[#e91e21] ">//</span> Get to Know</p>
                        <h2 className="font-bold xl:text-4xl text-2xl pt-4">We provide best pooja dhoop</h2>
                        <p className="pt-4">
                            Welcome to Murari Dhoop - Pure, Natural & Divine DhoopImmerse your surroundings in the calming aroma of our handcrafted dhoop sticks and cones.
                            Made with pure herbs, resins, and essential oils, our products are designed to enhance your meditation, prayer, and relaxation rituals.
                            Experience purity in every breath.
                        </p>
                        <ul className="pt-4 list-decimal pl-3">
                            <li className="text-black font-medium"> Herbal Dhoop Sticks</li>
                            <li className="text-black font-medium"> Sandalwood Dhoop Cones</li>
                            <li className="text-black font-medium "> Frankincense & Myrrh Dhoop</li>
                        </ul>
                        <div className="pt-4">
                            <div className="xl:flex gap-6 group-hover:text-[#e91e21] justify-between">
                                <div className="flex gap-6 group-hover:text-[#e91e21]">
                                    <div className="bg-[#edf0f5] rounded-full p-4">
                                        <FaPhoneAlt className="text-[#e91e21] text-3xl"/> 
                                    </div>
                                    <div>
                                        <p>Call Anytime</p>
                                        <p className="text-black text-2xl hover:text-[#e91e21]"><a href="tel:9725381838">+91-9725381838</a></p>
                                    </div>
                                </div>
                                <div className=" py-4 right relative">
                                   <a href="tel:9725381838" className="bg-[#e91e21b5] text-white py-4 px-8 font-bold rounded-md  hover:bg-[#e91e21]">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </section>
    )
}