import Banner from "../../Components/Banner/Banner";
import Contacts from "../../Components/Contacts/Contacts";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
    return (
        <div className="bg-[#212529]">
            <Banner></Banner>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;
