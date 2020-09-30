import React from 'react';

const websiteName = "Jaehoon's Blog";

export default function header(props) {
    return (
        <h1 className='page-header'>{websiteName}</h1>
    );
}