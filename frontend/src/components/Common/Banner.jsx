import RoamingImage from "../../assets/images/banners/roaming-banner.jpg";

// THIS IS THE STATIC BANNER IMAGE IN THE ROAMING PAGE TOP
const Banner = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div>Travel abroad</div>
                <div>Stay connected wherever you go</div>
            </div>
            <div>
                <image src={RoamingImage} alt="Raming Image"></image>
            </div>
        </div>
    );
};

export default Banner;