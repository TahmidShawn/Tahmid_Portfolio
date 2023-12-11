/* eslint-disable react/no-unescaped-entities */
import img from './../../assets/tahmid.jpg'
const Banner = () => {
    return (
        <header className="h-[560px]">
            <div className="avatar flex justify-center pt-10">
                <div className="w-44 rounded-full">
                    <img src={img} />
                </div>
            </div>
            <section>
                <h1 className='text-center text-gray-100 font-extrabold text-5xl mt-4'>I am Tahmid Shawn</h1>
                <p className='text-center text-gray-100 font-extrabold text-4xl mt-2'>Front-End Developer</p>
                <p className='text-gray-100 mt-7 text-center'>Hi, I'm a front-end developer specializing in React. I create sleek designs and seamless functionality. <br /> Also, I handle backend with Node, MongoDB, and Express</p>
                <div className='flex justify-center gap-5 mt-8'>
                    <button className='text-white btn-outline btn rounded-3xl px-6'>Get In Touch</button>
                    <button className='bg-white btn text-black rounded-3xl p-2 px-6 font-bold hover:bg-gray-800 hover:text-white hover:btn-neutral'>Download CV</button>
                </div>
            </section>
        </header>
    );
};

export default Banner;