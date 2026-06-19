const ProjectCard = ({ title, description, tags, demoUrl, githubUrl }) => {
    const hasDemoUrl = Boolean(demoUrl);
    const hasGithubUrl = Boolean(githubUrl);

    return (
        <div className="card h-100 shadow-sm hover-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{description}</p>
                <div className="mb-3">
                    {tags.map((tag, index) => (
                        <span key={index} className={`badge bg-${tag.variant} me-2`}>
                            {tag.label}
                        </span>
                    ))}
                </div>
                {(hasDemoUrl || hasGithubUrl) && (
                    <div className="d-flex gap-2">
                        {hasDemoUrl && (
                            <a
                                href={demoUrl}
                                className="btn btn-sm btn-outline-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>
                        )}
                        {hasGithubUrl && (
                            <a
                                href={githubUrl}
                                className="btn btn-sm btn-outline-secondary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
