const Project = ({ project }) => {
  return (
    <div
      className={
        "w-full h-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
      }
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg h-64 object-contain mb-4 w-full"
      />
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-md text-gray-600 mb-3">{project.description}</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-bold px-2 py-1 rounded bg-gray-700 text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center text-blue-600 gap-40 border-t-2 pt-5 border-gray-300 font-bold text-1xl">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-center justify-content-center"
          >
            <span>Ver proyecto</span>
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-center justify-content-center"
        >
          <span>Repositorio</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
