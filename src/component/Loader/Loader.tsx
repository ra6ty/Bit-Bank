import React from 'react';
import "./Loader.scss"

const Loader: React.FC = () => {
    return (
        <div className="loader" style={{display: 'flex', justifyContent: 'center', margin: '.5rem', position: "absolute", top: '50%', left: '46.5%'}}></div>
    );
};

export default Loader;