import {Tab, Tabs, ThemeProvider} from "@mui/material";
import {SidebarTheme} from "../../assets/styles/themes/default/MUIThemes";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, {useState} from "react";


const Sidebar = () => {

    const [tab, setTab] = useState(0);

    return(
        <ThemeProvider theme={SidebarTheme}>
        <div className="sidebar">
                    <div className="sidebar__header">
                        <div className="sidebar__header--icon" />
                        <h2 className="sidebar__header--title">TimeManager</h2>
                    </div>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={tab}
                        onChange={(event, newTab) => setTab(newTab)}
                        sx={{ borderRight: 1, borderColor: 'divider', height: 500 }}
                    >
                        <Tab icon={<AddTaskIcon/>} iconPosition="start" sx={{color: "#212121", fontSize: "large", height: 80}} label="Manager" />
                        <Tab icon={<CalendarMonthIcon/>} sx={{color: "#212121", fontSize: "large", height: 80}} iconPosition="start" label="Calendar" />
                        <Tab icon={<ViewKanbanIcon/>} sx={{color: "#212121", fontSize: "large", height: 80}} iconPosition="start" label="Kanban" />
                        <Tab icon={<AssessmentIcon/>} sx={{color: "#212121", fontSize: "large", height: 80}} iconPosition="start" label="Statistics" />
                    </Tabs>
        </div>
        </ThemeProvider>
    )
}

export default Sidebar;