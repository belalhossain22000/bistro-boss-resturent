import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='text-center w-4/12 mx-auto '>
            <p className='text-yellow-600 mb-3'>--- {subHeading} ---</p>
            <h1 className='text-4xl font-semibold uppercase my-4 border-y-4 py-3'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;