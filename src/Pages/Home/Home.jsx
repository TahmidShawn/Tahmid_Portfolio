import Banner from "../../Components/Banner/Banner";
import Contacts from "../../Components/Contacts/Contacts";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Shared/Footer/Footer";
import WhyMe from "../../Components/WhyMe/WhyMe";

const Home = () => {
    return (
        <div className="text-[#282828]">
            <Banner></Banner>
            <Experience></Experience>
            <WhyMe></WhyMe>
            <Projects></Projects>
            <Education></Education>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;
