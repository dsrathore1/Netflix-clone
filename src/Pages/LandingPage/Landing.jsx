import Footer from "../../Components/Sections/Footer";
import Section1 from "../../Components/Sections/Section1";
import Section2 from "../../Components/Sections/Section2";
import Section3 from "../../Components/Sections/Section3";
import Section4 from "../../Components/Sections/Section4";
import Section5 from "../../Components/Sections/Section5";

const Landing = () => {
    return (
        <>
            <div className="landingPageContainer">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer />
            </div>
        </>
    );
}

export default Landing;