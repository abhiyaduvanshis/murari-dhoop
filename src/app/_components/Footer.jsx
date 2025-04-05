'use client'

export default function Footer(){
    return(
        <>
        <footer  className="w-full bg-[#e91e21]">
            <div className="max-w-screen-xl  mx-auto p-4 static w-full">
                <p className="text-white text-center w-full text-sm">© 2025 Murari Dhoop</p>
                <p className="text-white text-center  text-sm">Disclaimer & Privacy Policy : - This website is just for information purpose and not to be claimed an official site</p>
            </div>
        </footer>

        <footer  className="w-full bg-[#f9fafb]">
            <div className="max-w-screen-xl lg:flex mx-auto p-4 static w-full">
                <a href="https://gyanimeter.co.in/portfolio/abhishek-singh" className="text-black text-center w-full text-sm">Developed by Abhishek Singh</a>
                <a href="http://gyanimeter.co.in/" className="text-black text-center w-full text-sm">Website: http://gyanimeter.co.in/</a>
            </div>
        </footer>
        </>
    )
}