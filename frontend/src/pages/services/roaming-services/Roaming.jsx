import Banner from "../../../components/Common/Banner";
import RoamingPackages from "../../../components/Roaming/RoamingPackages";
import CountryDetails from "../../../components/Roaming/CountryDetails";
import Footer from "../../../components/Footer/Footer";


const Roaming = () => {
    return (
        <div>
            <Banner />
            <RoamingPackages />
            <CountryDetails />
            <Footer />
        </div>
    );
};

export default Roaming;