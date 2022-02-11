import React from 'react';

const LetterAnimated = ({title}) => {
    return (
        <span className='row-title'>
            {[...title].map((letter,key)=>(
                <span
                    key={key}
                    className='row-letter'
                >
                    {letter}
                </span>
            ))}
        </span>
    );
};

export default LetterAnimated;
