import './Projects.css';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        title: 'RAM Selling Website',
        description:
            'FastAPI + React + MongoDB based e-commerce platform focused on selling RAM with modern browsing and product flow.',
        tags: [
            { label: 'React', variant: 'primary' },
            { label: 'FastAPI', variant: 'success' },
            { label: 'MongoDB', variant: 'info' },
        ],
        demoUrl: 'https://frontend-phi-puce-66.vercel.app',
        githubUrl: null,
    },
    {
        title: 'Hubco Collaboration Platform',
        description:
            'MERN stack platform that integrates Google Classroom style workflows, Discord-like chat, and Jira-style task/team management.',
        tags: [
            { label: 'MERN', variant: 'primary' },
            { label: 'Chat', variant: 'warning' },
            { label: 'Task Management', variant: 'dark' },
        ],
        demoUrl: 'https://hubco-rcbgrgoo0-mohedine-shreidis-projects.vercel.app/login',
        githubUrl: null,
    },
    {
        title: 'Game Selling Store',
        description:
            'Game selling store built with Next.js, Express, MongoDB, and React for catalog browsing and storefront functionality.',
        tags: [
            { label: 'Next.js', variant: 'primary' },
            { label: 'Express', variant: 'secondary' },
            { label: 'MongoDB', variant: 'info' },
            { label: 'React', variant: 'success' },
        ],
        demoUrl: 'https://client-lbeqtyunw-mohedine-shreidis-projects.vercel.app/',
        githubUrl: null,
    },
];

const Projects = () => {
    return (
        <section className="py-5 bg-light" id="projects">
            <div className="container">
                <h2 className="text-center display-5 mb-5">Featured Projects</h2>
                <div className="row g-4">
                    {projectsData.map((project, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
