


import React from 'react';

const Category = ({ name, widgets, onAddWidget, onRemoveWidget }) => {
    return (
        <div className="category">
            <h3>{name}</h3>
            {widgets.map((widget, index) => (
                <div key={index} className="widget">
                    <h4>{widget.title}</h4>
                    <p>{widget.content}</p>
                    <button onClick={() => onRemoveWidget(name, widget.title)} className="remove-widget-button">
                        &times; {/* Cross symbol for remove */}
                    </button>
                </div>
            ))}
            <button onClick={() => onAddWidget()} className="add-widget-button">
                + Add Wid
            </button>
        </div>
    );
};

export default Category;
