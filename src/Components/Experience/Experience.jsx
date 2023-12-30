import skills1 from './../../assets/skills/javascript.svg';
import skills2 from './../../assets/skills/react.svg';
import skills3 from './../../assets/skills/node-js.svg';
import skills4 from './../../assets/skills/mongo.svg';
import skills5 from './../../assets/skills/express.png';
import skills6 from './../../assets/skills/tailwind.svg';

const skills = [skills1, skills2, skills3, skills4, skills5, skills6];

const Experience = () => {
    return (
        <section className="text-black pt-10 ">
            <h2 className="text-3xl pb-4 border-b-[1px] border-gray-400">EXPERIENCE</h2>
            <div className='grid grid-cols-3 md:grid-cols-6 max-w-3xl mx-auto mt-2'>
                {skills.map((skill, index) => (
                    <div key={index} className='border-[1px] border-black w-max p-3 rounded-xl mx-auto mt-8'>
                        <img className='h-10 w-10' src={skill} alt="" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
