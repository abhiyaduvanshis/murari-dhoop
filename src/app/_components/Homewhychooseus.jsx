import { FaCheck } from "react-icons/fa";

export default function Homewhychooseus(){
    return(
        <section className="pt-20 pb-16 relative">
            <div className="absolute bg-[url(https://html.kodesolution.com/2024/amiso-php/images/icons/pattern-1.jpg)] bg-no-repeat lg:w-5xl top-0 left-0 h-full"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 static w-full">
               <div className="container z-10 grid xl:grid-cols-2 gap-4" id="Why-Choose-Us">
                    <div className="">
                        <p className="text-xl"><span className="text-[#e91e21] ">//</span> Get to Know</p>
                        <h2 className="font-bold xl:text-4xl text-2xl pt-4 mb-2">Why Choose Us?</h2>
                        <div className="grid grid-cols-12 gap-4 pt-4">
                            <div className="col-span-2">
                                <FaCheck className="bg-[#e91e21] text-white rounded-full  w-14 h-14 p-5"/>
                            </div>
                            <div className="col-span-9">
                                <h3 className="font-bold text-lg mb-2">Herbal Dhoop Sticks</h3>
                                <p className="">Infused with the richness of natural herbs, 
                                our herbal dhoop sticks are perfect for spiritual ceremonies and peaceful home environments. </p>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4 pt-4">
                            <div className="col-span-2">
                                <FaCheck className="bg-[#e91e21] text-white rounded-full w-14 h-14 p-5"/>
                            </div>
                            <div className="col-span-9">
                                <h3 className="font-bold text-lg mb-2">Sandalwood Dhoop Cones</h3>
                                <p className="">Crafted with authentic sandalwood,
                                     these cones fill your space with a rich, 
                                     woody fragrance known for its calming properties.</p>
                                     <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4 pt-4">
                            <div className="col-span-2">
                                <FaCheck className="bg-[#e91e21] text-white rounded-full  w-14 h-14 p-5"/>
                            </div>
                            <div className="col-span-9">
                                <h3 className="font-bold text-lg mb-2">Frankincense & Myrrh Dhoop</h3>
                                <p className="">A traditional blend for cleansing and spiritual practices, perfect for meditation and relaxation. </p>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="lg:absolute w-full" src="/assets/images/dhoopbatti.jpg"/>
                    </div>
               </div>
            </div>
        </section>
    )
}