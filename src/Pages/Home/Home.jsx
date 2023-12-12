import Banner from "../../Components/Banner/Banner";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
    return (
        <div className="bg-[#212529]">
            <Banner></Banner>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;
// 393E46