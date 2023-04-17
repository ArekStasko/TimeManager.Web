import React from 'react';
export const customViews = {
    customView: {
        type: 'dayGridMonth',
        duration: { months: 1 },
        buttonText: 'Custom View',
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