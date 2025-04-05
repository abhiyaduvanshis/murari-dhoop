'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Homebanner(){

    return(
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={1000}
            transitionTime={500}
            dynamicHeight={false}
            swipeable={false}
            emulateTouch={false}
            animationHandler ="fade"
            className="pt-20"
        >
            <div className="lg:h-lvh">
                <video width="100%" height="200" autoPlay muted loop>
                <source src="/assets/images/bannervd.mp4" type="video/mp4" />
                </video> 
            </div>

        </Carousel>    
    )
}