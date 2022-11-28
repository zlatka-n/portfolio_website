import React from 'react';

export const Introduction = ({ text, className }) => {
    console.log(text)
    return (
        <p className={className}>
            {text}
        </p>
    );
};
