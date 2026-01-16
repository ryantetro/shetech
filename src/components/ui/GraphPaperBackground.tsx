import React from 'react';

type GraphPaperBackgroundProps = {
    className?: string;
    color?: string; // e.g., "#d1d1d1"
    size?: string;  // e.g., "20px 20px"
};

export const GraphPaperBackground = ({
    className = "absolute inset-0 opacity-100",
    color = "#d1d1d1",
    size = "20px 20px"
}: GraphPaperBackgroundProps) => {
    return (
        <div
            className={className}
            style={{
                backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
                backgroundSize: size,
                zIndex: 0
            }}
        ></div>
    );
};
