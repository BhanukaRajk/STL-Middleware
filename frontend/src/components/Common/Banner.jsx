import RoamingImage from "../../assets/images/banners/roaming-banner.jpg";

// THIS IS THE STATIC BANNER IMAGE IN THE ROAMING PAGE TOP
const Banner = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col absolute">
                <div className="text-5xl font-serif">Travel abroad</div>
                <div className="text-sm font-serif">Stay connected wherever you go</div>
            </div>
            <div className="w-full">
                <img src={RoamingImage} alt="Roaming Image" />
            </div>
        </div>
    );
};

export default Banner;