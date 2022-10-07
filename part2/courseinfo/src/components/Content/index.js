import React from 'react';
import Part from '../Part';

const Content = ({content, exo}) => {
    return (
        <>
              <Part exo={exo} content={content} />
        </>
    );
}

export default Content;
