import React from "react";

type StatsProps = {
    highlight: string,
    description: string
}

const Stats: React.FC<StatsProps> = ({highlight, description}: StatsProps) => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="font-semibold text-amber-600 text-2xl">{highlight}+</h3>
            <p className="font-semibold text-white">{description}</p>
        </div>
    );
}


export default Stats;