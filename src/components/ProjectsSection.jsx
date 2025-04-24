import { useState } from "react";
import Project from "./Project";

const projects = [
  {
    title: "BioCollector",
    description:
      "BioCollector es una aplicación móvil diseñada para la Facultad de Biología, que facilita y optimiza el proceso de recopilación y registro de datos biológicos en campo.",
    tags: ["React Native","Pocket Base", "SQLite"],
    image: "/src/assets/projects/biocollector.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
  },
  {
    title: "Reko: ChatBot",
    description:
      "Sistema para la gestion de tareas en Notion utilizando el servicio de mensajeria Whatsapp.(1° Hackathon | Puebla)",
    tags: ["Express","Notion","JavaScript"],
    image: "/src/assets/projects/rekochatbot.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
    projectUrl: "#",
  },
  {
    title: "SOTM",
    description:
      "Aplicación que permite encontrar la ruta mas corta entre las estaciones del metro de la ciudad de México. (3° Fepro 2022 | Puebla)",
    tags: ["Java", "Apache","JSP", "Ajax"],
    image: "/src/assets/projects/sotm.png",
    repoUrl: "https://github.com/JesusPichon/Sistema-Orientacion-Transporte-Metro",
    projectUrl: "#",
  },
  {
    title: "YOTeCuido",
    description:
      "BioCollector es una aplicación móvil diseñada para la Facultad de Biología, que facilita y optimiza el proceso de recopilación y registro de datos biológicos en campo.",
    tags: ["Java","SpringBoot"],
    image: "/src/assets/projects/yotecuido.png",
    repoUrl: "https://github.com/JesusPichon/api-enfermeras",
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
    <section className="w-full flex flex-col items-center justify-center px-4 py-10 md:pt-40 relative">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Proyectos
      </h2>

      <div className="relative w-full max-w-4xl h-[70%] flex items-center justify-center">
        <Project project={projects[currentIndex]} full />
        <button
          onClick={handlePrev}
          className="absolute left-0 text-3xl px-4 py-2 bg-white/50 rounded-full shadow hover:bg-gray-200/20 cursor-pointer font-bold text-white"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 text-3xl px-4 py-2 bg-white/50 rounded-full shadow hover:bg-gray-200/20 cursor-pointer font-bold text-white"
        >
          &#62;
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
