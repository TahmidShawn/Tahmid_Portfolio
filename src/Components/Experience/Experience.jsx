import skills1 from './../../assets/skills/javascript.svg';
import skills2 from './../../assets/skills/react.svg';
import skills3 from './../../assets/skills/node-js.svg';
import skills4 from './../../assets/skills/mongo.svg';
import skills5 from './../../assets/skills/express.png';
import skills6 from './../../assets/skills/tailwind.svg';

const skills = [skills1, skills2, skills3, skills4, skills5, skills6];

const Experience = () => {
    return (
        <section className="text-white">
            <h2 className="text-center text-3xl">EXPERIENCE WITH</h2>
            <div className='flex gap-10 justify-center mt-5'>
                {skills.map((skill, index) => (
                    <div key={index} className='border-2 border-white p-2'>
                        <img className='h-10 w-10' src={skill} alt="" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
