const Project = ({ project }) => {
  return (
    <div className="w-full h-full bg-backgrounDark p-6 rounded-2xl text-center ring ring-primary/40 shadow-primary hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg h-64 object-contain mb-4 w-full"
        loading="lazy"
      />
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
        {project.title}
      </h3>
      <p className="text-md text-gray-600 dark:text-gray-300 mb-3">
        {project.description}
      </p>
      <div className="flex gap-2 flex-wrap mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-bold px-2 py-1 rounded bg-main/80 text-white dark:text-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center text-blue-600 dark:text-blue-400 gap-40 border-t-2 pt-5 border-gray-300 dark:border-gray-700 font-bold text-1xl">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-main text-decoration-none"
          >
            <span>Ver proyecto</span>
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-main text-decoration-none"
        >
          <span>Repositorio</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
