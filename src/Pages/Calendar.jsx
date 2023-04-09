

//TODO Create the calendar layout:
// 1. Month will be one big div, divided into smaller pieces - days - every day will have the
// ability to add some task, delete or update it
// 2. Every day div have to be automatically sorted tasks by hours
// 3. I Can create some array/enum that i will iterate to check how many days - divs - i have
// to generate etc
// 4. I should be able to turn week/month mode, month mode will show actual month with tasks but
// week will show tasks with hours like a chart

import {Button, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const Calendar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState(0);
    const open = Boolean(anchorEl);
    const options = ["Month", "Week"];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(selected);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setSelected(index);
    };

    return(
        <div className="calendar">
            <div className="calendar__navigation">
            <Button
                variant="contained"
                size="large"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                View
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        onClick={event => onMenuItemClick(event, index)}
                        selected={index === selected}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
            </div>
            <div className="calendar__body">
                {
                    selected == 0 ? (
                        <div>
                            Month
                        </div>
                    ) : (
                        <div>
                            Week
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Calendar