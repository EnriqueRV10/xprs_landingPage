import { useState } from "react";
import Project from "./Project";

const projects = [
  {
    title: "BioCollector",
    description:
      "BioCollector es una aplicación móvil diseñada para la Facultad de Biología, que facilita y optimiza el proceso de recopilación y registro de datos biológicos en campo.",
    tags: ["react native", "JavaScript"],
    image: "/assets/projects/WhatsAppLogo1.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
  },
  {
    title: "BioCollector 2",
    description:
      "BioCollector es una aplicación móvil diseñada para la Facultad de Biología, que facilita y optimiza el proceso de recopilación y registro de datos biológicos en campo.",
    tags: ["react native", "JavaScript"],
    image: "/images/BioCollector.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
    projectUrl: "#",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    console.log(currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    console.log(currentIndex);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Proyectos
      </h2>

      <div className="relative w-full max-w-4xl h-[70%] flex items-center justify-center">
        <Project project={projects[currentIndex]} full />
        <button
          onClick={handlePrev}
          className="absolute left-0 text-3xl px-4 py-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 text-3xl px-4 py-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          &#62;
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
