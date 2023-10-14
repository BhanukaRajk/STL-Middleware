import Banner from "../../../components/Roaming/Banner";
import RoamingPackages from "../../../components/Roaming/RoamingPackages";
import RoamingDetails from "../../../components/Roaming/RoamingDetails";
import Footer from "../../../components/Footer/Footer";

export function Roaming() {
    return (
        <div>
            <Banner />
            <RoamingPackages />
            <RoamingDetails />
            <Footer />
        </div>
    );
}