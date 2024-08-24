

import React from 'react';

const Widget = ({ title, content }) => {
    return (
        <div className="widget">
            <h4>{title}</h4>
            <div className="widget-content">
                {content}
            </div>
        </div>
    );
};

export default Widget;



