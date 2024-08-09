import React from "react";
import SliderComponent from "./SliderComponent";

const Home = () =>{

    return (
        <>
            <SliderComponent/>
            <div className="review">
                <div className="box1">
                    <img src="src/assets/user.jpg" alt="user"/>
                    <h4> 3000+ SUCCESSFULL TRIPS</h4>
                    <p>A proven history of delivering unparalleled travel experiences with over 3000 meticulously planned journeys.</p>
                </div>
                <div className="box1">
                    <img src="src/assets/travel.jpg" alt="experience"/>
                    <h4>HANDCRAFTED EXPERIENCE</h4>
                    <p>Curated itineraries tailored to individual preferences and desires, with impeccable attention to detail in every aspect of the voyage, dedicated to crafting extraordinary moments and indelible memories.</p>
                </div>
                <div className="box1">
                    <img src="src/assets/rating.jpg" alt="travel"/>
                    <h4>EXTREMELY HAPPY TRAVELLERS</h4>
                    <p>Exceptional customer satisfaction and a loyal client base, with glowing reviews and heartfelt testimonials from ecstatic travelers, devoted to surpassing expectations and ensuring an exquisite travel experience.</p>
                </div>
            </div>
            <h1>TOP SELLERS...</h1>
            <div className="topseller">
                <div className="grid-item">
                    <img src="https://imagedelivery.net/0LMYosKeo5o-LXOCjdKUuA/tourscanner.com/2018/05/colosseo.jpg/w=9999" alt="rome"/>
                    <span>Rome</span>
                </div>
                <div className="grid-item">
                    <img src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" alt="london"/>
                    <span>London</span>
                </div>
                <div className="grid-item">
                    <img src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/medium_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" alt="paris"/>
                    <span>Paris</span>
                </div>
                <div className="grid-item">
                    <img src="https://dynamic.tourtravelworld.com/blog_images/the-13-most-amazing-places-to-visit-in-dubai-20170421033439.jpg" alt="dubai"/>
                    <span>Dubai</span>
                </div>
                
                <div className="grid-item">
                    <img src="https://media.istockphoto.com/id/653953140/photo/hindu-temple-in-bali.webp?b=1&s=170667a&w=0&k=20&c=-Zo3LO0CI8fbtwkUUH50QJ0wtVjzGj1aCtfRIHDI5uQ=" alt="bali"/>
                    <span>Bali</span>
                </div>
                <div className="grid-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkLIDelor2u2lSO_PooMIuC1o7ExGgM8vpA&s" alt="goa"/>
                    <span>Goa</span>
                </div>
                <div className="grid-item">
                    <img src="https://static.toiimg.com/thumb/msid-81672797,width-748,height-499,resizemode=4,imgsize-448902/.jpg" alt="himalayas"/>
                    <span>Jammu & Kashmir</span>
                </div>
                <div className="grid-item">
                    <img src="https://iresizer.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/malaysia-111avril.jpg&size=850x530&force_webp=1" alt="malaysia"/>
                    <span>Malaysia</span>
                </div>

            </div>
        </>
    )
}

export default Home;