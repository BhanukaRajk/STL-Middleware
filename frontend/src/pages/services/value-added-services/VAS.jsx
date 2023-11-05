// TODO:  NOT USED IN HERE
import Banner from "../../../components/Common/Banner";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";


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
            <Outlet />
            <Footer />
        </div>
    );
};

export default ValueAddedServices;