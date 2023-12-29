/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import img from './../../assets/tahmid1.png'
import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Banner = () => {
    const handleDownloadCV = () => {
        // Replace the URL with the direct link to your PDF file on Google Drive
        const pdfUrl = 'https://drive.google.com/file/d/1chroNHuKM1R7dV9kCMImugGSKksl7IKj/view?usp=sharing';
        window.open(pdfUrl, '_blank');

    };
    return (
        <header className="h-[560px] z-30 pt-32 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between pt-0 md:p-10 bg-white">
                <div className="w-[700px]">
                    <img src={img} />
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='font-medium text-4xl mt-4'> Tahmid Shawn.</h1>
                    <h1 className='font-medium text-4xl mt-2 mb-6'> Front-End Developer</h1>

                    <p className='mt-4 text-justify'>I'm a front-end developer specializing in React . I create sleek designs and seamless functionality . Also, I handle backend with Node Js, MongoDB, and Express.</p>
                    {/* <section className='flex mt-2 items-center gap-1 ml-[2px]'>
                        <a href='https://www.linkedin.com/in/tahmid-shawn/' target='_blanks' className='text-black text-2xl'> <BsLinkedin /></a>
                        <a href='https://www.facebook.com/md.tahmid022' target='_blanks' className='text-black text-3xl'> <BiLogoFacebookSquare /> </a>
                    </section> */}

                    <section className='mt-6'>
                        <div className=''>
                            <Link target='_blanks' to='https://github.com/TahmidShawn'>
                                <button className='bg-gray-800 text-white btn rounded-none p-2 px-6 font-bold hover:bg-gray-800 hover:text-white hover:btn-neutral'>GitHub</button>
                            </Link>
                            <button onClick={handleDownloadCV} className='bg-gray-800 text-white btn rounded-none p-2 px-6 font-bold hover:bg-gray-800 hover:text-white hover:btn-neutral'>Download CV</button>
                            <Link target='_blanks' to='https://github.com/TahmidShawn'>
                                <button className='bg-gray-800 text-white btn rounded-none p-2 px-6 font-bold hover:bg-gray-800 hover:text-white hover:btn-neutral'>Linkedin</button>
                            </Link>
                        </div>
                    </section>

                </div>

            </div>


        </header>
    );
};

export default Banner;