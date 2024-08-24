import React from 'react';

const AddWidget = ({ newWidget, setNewWidget, categories, handleAddWidget }) => {
    return (
        <div className="widget-form">
            <h3>Add New Widget</h3>
            <select
                value={newWidget.category}
                onChange={(e) => setNewWidget({ ...newWidget, category: e.target.value })}
            >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Widget Title"
                value={newWidget.title}
                onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
            />
            <textarea
                placeholder="Widget Content"
                value={newWidget.content}
                onChange={(e) => setNewWidget({ ...newWidget, content: e.target.value })}
            />
            <button
                onClick={() => handleAddWidget(newWidget.category)}
                disabled={!newWidget.category || !newWidget.title || !newWidget.content}
            >
                Add Widgets
            </button>
        </div>
    );
};

export default AddWidget;




