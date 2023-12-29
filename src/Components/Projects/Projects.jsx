import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import project1 from './../../assets/projects/projects1.png';
import project2 from './../../assets/projects/projects2.png';
import project3 from './../../assets/projects/projects3.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Projects = () => {
    return (
        <div className='max-w-2xl mx-auto mt-20 relative'>
            <h2 className="text-center text-black mb-10 text-3xl">PROJECTS</h2>
            <AutoplaySlider
                className='h-[340px] w-full'
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                infinite={true}
                buttons={true}
                bullets={false}
            >
                <div className="relative w-full h-full">
                    <img src={project1} className='h-full w-full' alt="" />
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://zenfit-d7462.web.app/" target='_blanks' className="text-white text-4xl font-extrabold">Live Preview</a>
                    </div>
                </div>

                <div className="relative w-full h-full">
                    <img src={project2} className='h-full w-full' alt="" />
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://skill-bee.firebaseapp.com/" target='_blanks' className="text-white text-4xl font-extrabold">Live Preview</a>
                    </div>
                </div>

                <div className="relative w-full h-full">
                    <img src={project3} className='h-full w-full' alt="" />
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://techvine-3c37f.web.app/" target='_blanks' className="text-white text-4xl font-extrabold">Live Preview</a>
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Projects;
