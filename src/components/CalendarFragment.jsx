import React from 'react';

const CustomView = () => {
    return (
        <div>
            <h2>Custom View</h2>
            <p>This is a custom view for FullCalendar</p>
        </div>
    );
};

export const customViews = {
    customView: {
        type: 'dayGridMonth',
        duration: { months: 1 },
        buttonText: 'Custom View',
        component: CustomView,
    },
};

export const customButtons = {
    customButton: {
        text: 'Custom Button',
        click: function () {
            alert('Clicked the custom button!');
        },
    },
};