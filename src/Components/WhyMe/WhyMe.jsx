import myVideo from './../../assets/skills/me.mp4'

const WhyMe = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-white mt-16">
                <div className="hero-content flex-col justify-center gap-0 lg:flex-row">
                    <div>
                        <h1 className='text-5xl font-bold mb-10'>WHY ME ?</h1>
                        <video src={myVideo} controls className='max-w-lg md:mr-16 rounded-lg shadow-2xl'></video>
                    </div>
                    <div className='w-1/3'>

                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End Services</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I create dynamic functionality with React and sleek designs using Tailwind CSS for an enhanced user experience.</p>

                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Backend Cover</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    With hands-on experience in using Node.js, Express, and MongoDB, I craft efficient server-side solutions for seamless user interactions.</p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Responsive Design Excellence</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Specializing in responsive design, I ensure your website adapts flawlessly to diverse devices, providing a consistent and engaging user experience across all screens.</p>
                            </li>
                        </ol>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;