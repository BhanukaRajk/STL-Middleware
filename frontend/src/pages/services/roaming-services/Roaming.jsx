import Banner from "../../../components/Roaming/Banner";
import RoamingPackages from "../../../components/Roaming/RoamingPackages";
import CountryDetails from "../../../components/Roaming/CountryDetails";
import Footer from "../../../components/Footer/Footer";

export function Roaming() {
    return (
        <div>
            <Banner />
            <RoamingPackages />
            <CountryDetails />
            <Footer />
        </div>
    );
}