import Banner from "../../../components/Common/Banner";
import News from "../../../components/VAS/News";
import Sport from "../../../components/VAS/Sport";
import Gaming from "../../../components/VAS/Gaming";
import RoamingPackages from "../../../components/Roaming/RoamingPackages";
import CountryDetails from "../../../components/Roaming/CountryDetails";
import Footer from "../../../components/Footer/Footer";

const VasBanner = [
    {
        heading: "Value Added Services",
        text: "Subcription based values adding customer service network",
        image: "IMG-PATH",
    },
];

const ValueAddedServices = () => {
    return (
        <div>
            <Banner data={VasBanner} />
            <News />
            <Sport />
            <Gaming />
            <RoamingPackages />
            <CountryDetails />
            <Footer />
        </div>
    );
};

export default ValueAddedServices;