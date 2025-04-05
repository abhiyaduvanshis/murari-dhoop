'use client'

export default function Contactus(){
    return(
        <section className="overflow-hidden pt-20 pb-16 bg-[url(https://html.kodesolution.com/2024/amiso-php/images/icons/shape.png)] bg-left-top bg-no-repeat">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 static w-full">
                <div className="flex container z-10 justify-center">
                    <div className="w-1/2">
                        <p className="text-xl"><span className="text-[#e91e21] ">//</span> Contact Now</p>
                        <h2 className="font-bold xl:text-4xl text-2xl pt-4 mb-2">Get in touch with us</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <input 
                                placeholder="Enter Your Name"
                                type="text" 
                                name="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e91e21] focus:border-[#e91e21] block w-full p-4 dark:bg-[#e91e21] dark:border-[#e91e21] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e91e21] dark:focus:border-[#e91e21]"/>
                            </div>
                            <div>
                                <input 
                                placeholder="Enter Your Email"
                                type="text" 
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e91e21] focus:border-[#e91e21] block w-full p-4 dark:bg-[#e91e21] dark:border-[#e91e21] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e91e21] dark:focus:border-[#e91e21]"/>
                            </div>
                        </div>    
                        <div className="grid grid-cols-2 gap-4 mb-4">    
                            <div>
                                <input 
                                placeholder="Enter Your Subject"
                                type="text" 
                                name="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e91e21] focus:border-[#e91e21] block w-full p-4 dark:bg-[#e91e21] dark:border-[#e91e21] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e91e21] dark:focus:border-[#e91e21]"/>
                            </div>
                            <div>
                                <input 
                                placeholder="Enter Your Phone"
                                type="text" 
                                name="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e91e21] focus:border-[#e91e21] block w-full p-4 dark:bg-[#e91e21] dark:border-[#e91e21] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e91e21] dark:focus:border-[#e91e21]"/>
                            </div>
                        </div>
                        <div>
                            <textarea 
                            placeholder="Enter Message"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e91e21] focus:border-[#e91e21] block w-full p-4 dark:bg-[#e91e21] dark:border-[#e91e21] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e91e21] dark:focus:border-[#e91e21]"></textarea>
                        </div>
                    </div>
                    <div className="animate-fade-right ">
                        
                    </div>   
                </div>
            </div>
        </section>
    )
}