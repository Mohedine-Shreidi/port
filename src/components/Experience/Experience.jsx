import './Experience.css';
import ExperienceCard from './ExperienceCard';

const experienceData = [
    {
        title: 'Junior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2024 - Present',
        isCurrent: true,
        responsibilities: [
            'Developed and maintained web applications using React and Node.js',
            'Collaborated with cross-functional teams to deliver features on time',
            'Implemented RESTful APIs and integrated third-party services',
            'Participated in code reviews and improved application performance',
        ],
    },
    {
        title: 'Junior Full Stack Developer Intern',
        company: 'Digital Hub',
        period: 'Feb 2026 - May 2026',
        isCurrent: false,
        responsibilities: [
            'Developed full stack features using React and Node.js',
            'Built responsive web applications and RESTful APIs',
            'Collaborated with team members on real-world projects',
            'Contributed to database design and optimization',
        ],
    },
    {
        title: 'Frontend Developer',
        company: 'Digital Innovations',
        period: '2023 - 2024',
        isCurrent: false,
        responsibilities: [
            'Built foundational logic and problem-solving skills through frontend development',
            'Wrote clean, maintainable code and learned best practices in web development',
            'Developed logical thinking through debugging and implementing UI components',
            'Strengthened fundamentals in version control and collaborative development using Git',
        ],
    },
];

const Experience = () => {
    return (
        <section className="py-5" id="experience">
            <div className="container">
                <h2 className="text-center display-5 mb-5">Experience</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard key={index} {...exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
