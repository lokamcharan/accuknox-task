
import React, { useState } from 'react';
import Category from './Category';
import AddWidget from './AddWidget';

const Dashboard = () => {
    const [categories, setCategories] = useState([
        {
            name: 'CSPM Executive Dashboard',
            widgets: [
                { title: 'Cloud Accounts', content: 'Widget Content' },
                { title: 'Cloud Account Risk Assessment', content: 'Widget Content' },
            ],
        },
        {
            name: 'CWPP Dashboard',
            widgets: [
                { title: 'Top 5 Namespace Specific Alerts', content: 'Widget Content' },
                { title: 'Workload Alerts', content: 'Widget Content' },
            ],
        },
        {
            name: 'Registry Scan',
            widgets: [
                { title: 'Image Risk Assessment', content: 'Widget Content' },
                { title: 'Image Security Issues', content: 'Widget Content' },
            ],
        },
    ]);

    const [newWidget, setNewWidget] = useState({ category: '', title: '', content: '' });
    const [showAddWidget, setShowAddWidget] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddWidget = (categoryName) => {

        const updatedCategories = categories.map((category) => {
            if (category.name === categoryName) {
                return {
                    ...category,
                    widgets: [...category.widgets, { title: newWidget.title, content: newWidget.content }],
                };
            }
            return category;
        });

        setCategories(updatedCategories);
        setNewWidget({ category: '', title: '', content: '' });
        setShowAddWidget(false);
    };


    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(categories);
    

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>CNAPP Dashboard</h2>
                <input
                    type="text"
                    placeholder="Search Categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="dashboard-search"
                />
                <div className="dashboard-controls">
                    <button onClick={() => setShowAddWidget(!showAddWidget)}>
                        {showAddWidget ? ' + Add Widget ' : '+ Add Widget'}
                    </button>
                    <button>...</button>
                    <button>Last 2 days</button>
                </div>
            </div>

            {filteredCategories.map((category, index) => (
                <Category
                    key={index}
                    name={category.name}
                    widgets={category.widgets}
                    onAddWidget={() => handleAddWidget(category.name)}  
                />
                
            ))}

            <div className={`add-widget-container ${showAddWidget ? 'show' : ''}`}>
                <AddWidget 
                    newWidget={newWidget}
                    setNewWidget={setNewWidget}
                    categories={categories}
                    handleAddWidget={handleAddWidget}
                />
            </div>
        </div>
    );
};



export default Dashboard;


