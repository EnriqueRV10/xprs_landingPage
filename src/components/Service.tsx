import React, { useState } from "react";

interface ServiceCardProps {
    title: string;
    src: { src: string }
    text: string;
};

const Service: React.FC<ServiceCardProps> = ({ title, src, text }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="flex flex-col items-center mb-2 sm:mb-4"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            <img
                src={src.src}
                alt="laptop"
                width="400"
                height="400"
                className={`rounded-full w-50 h-50 object-cover mb-4 transform transition-transform duration-300 ${visible ? '-translate-y-4 scale-105' : ''}`}
            />


            <div
                className={`text-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            >
                <p className="mb-4 font-semibold">{title}</p>
                <p className="w-64 mb-6">{text}</p>
                <input
                    type="button"
                    value="más infórmacion"
                    className="border-2 border-solid"
                />
            </div>
        </div>
    );
}


export default Service;
