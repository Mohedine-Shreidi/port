import {
    Hero,
    Skills,
    Projects,
    Experience,
    Education,
    About,
    Contact,
    Footer,
} from './components';

// Portfolio configuration - Update your info here
const portfolioConfig = {
    name: 'Mohedine Shreidi',
    title: 'Full Stack Developer',
    subtitle: 'Junior Developer | Building Modern Web Applications',
    profileImage: '/profile.jpeg',
    email: 'shreidi.5@gmail.com',
};

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Hero
                name={portfolioConfig.name}
                title={portfolioConfig.title}
                subtitle={portfolioConfig.subtitle}
                profileImage={portfolioConfig.profileImage}
            />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <About />
            <Contact />
            <Footer name={portfolioConfig.name} email={portfolioConfig.email} />
        </div>
    );
};

export default Portfolio;
