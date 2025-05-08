import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import './ProjectStyle.css';

import Project from "./Project";

const projects = [
  {
    title: "BioCollector",
    description:
      "BioCollector es una aplicación móvil diseñada para la Facultad de Biología, que facilita y optimiza el proceso de recopilación y registro de datos biológicos en campo.",
    tags: ["React Native", "Pocket Base", "SQLite"],
    image: "/assets/projects/biocollector.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
  },
  {
    title: "Reko: ChatBot",
    description:
      "Sistema para la gestion de tareas en Notion utilizando el servicio de mensajeria Whatsapp.(1° Hackathon | Puebla)",
    tags: ["Express", "Notion", "JavaScript"],
    image: "/assets/projects/rekochatbot.png",
    repoUrl: "https://github.com/JesusPichon/Aplicacion_Biologia",
    projectUrl: "#",
  },
  {
    title: "SOTM",
    description:
      "Aplicación que permite encontrar la ruta mas corta entre las estaciones del metro de la ciudad de México. (3° Fepro 2022 | Puebla)",
    tags: ["Java", "Apache", "JSP", "Ajax"],
    image: "/assets/projects/sotm.png",
    repoUrl:
      "https://github.com/JesusPichon/Sistema-Orientacion-Transporte-Metro",
    projectUrl: "#",
  },
  {
    title: "YOTeCuido",
    description:
      "YoTeCuido es una aplicación web diseñada para conectar a usuarios con enfermeras disponibles en su localidad de forma rápida y eficiente. La plataforma facilita la búsqueda y el contacto directo con profesionales de enfermería, brindando apoyo en momentos críticos de salud (Hackathon del Tecnológico de Monterrey).",
    tags: ["Java", "SpringBoot"],
    image: "/assets/projects/yotecuido.png",
    repoUrl: "https://github.com/JesusPichon/api-enfermeras",
    projectUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-4 py-10 md:pt-40 relative"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Proyectos
      </h2>

      <div className="w-full max-w-4xl">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 100,
            depth: 300,
            slideShadows: true,
            scale: 0.5,
          }}
          navigation
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
