import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  src: { src: string };
  text: string;
}

const Service: React.FC<ServiceCardProps> = ({ title, src, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="flex flex-col items-center mb-2 sm:mb-4"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img
        src={src.src}
        alt="laptop"
        width="400"
        loading="lazy"
        height="400"
        className={`rounded-full w-50 h-50 object-cover mb-4 transform transition-transform duration-300 ${visible ? "md:-translate-y-4 md:scale-105" : ""}`}
      />

      <p
        className={`font-semibold text-white text-2xl mb-1 transform transition-transform duration-300 ${visible ? "md:-translate-y-4 md:scale-105" : ""}`}
      >
        {title}
      </p>

      <div
        className={`text-center transition-opacity duration-300 ${visible ? "md:opacity-100" : "md:opacity-0"}`}
      >
        <p className="text-white w-64 mb-6">{text}</p>
        <input
          type="button"
          value="Más información"
          className="border border-amber-600 font-semibold text-xl text-white px-4 py-2 hover:text-amber-600 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Service;
