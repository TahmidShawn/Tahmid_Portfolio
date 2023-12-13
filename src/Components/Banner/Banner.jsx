/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import img from './../../assets/tahmid1.png'
const Banner = () => {
    const handleDownloadCV = () => {
        // Replace the URL with the direct link to your PDF file on Google Drive
        const pdfUrl = 'https://drive.google.com/file/d/1chroNHuKM1R7dV9kCMImugGSKksl7IKj/view?usp=sharing';
        window.open(pdfUrl, '_blank');

    };
    return (
        <header className="h-[560px] z-30 pt-32">
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center pt-0 md:pt-10">
                <div className="w-52 rounded-full">
                    <img src={img} />
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='text-gray-100 font-bold text-4xl mt-4'>Tahmid Shawn.</h1>
                    <p className='text-gray-100 font-bold text-4xl mt-2'> Front-End Developer.</p>
                </div>
            </div>
            <section>

                <p className='text-gray-100 mt-12 text-center'>I'm a front-end developer specializing in React. I create sleek designs and seamless functionality. <br /> Also, I handle backend with Node Js, MongoDB, and Express</p>
                <div className='flex justify-center gap-5 mt-12'>
                    <Link target='_blanks' to='https://github.com/TahmidShawn'>
                        <button className='text-white btn-outline btn rounded-3xl px-6'>My GitHub</button>
                    </Link>
                    <button onClick={handleDownloadCV} className='bg-white btn text-black rounded-3xl p-2 px-6 font-bold hover:bg-gray-800 hover:text-white hover:btn-neutral'>Download CV</button>
                </div>
            </section>
        </header>
    );
};

export default Banner;