import {GetMonthLayout} from "../services/CalendarService";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import {customButtons, customViews} from "../components/CalendarFragment";
import styled from "styled-components";
import {CardContent, Chip, Typography} from "@mui/material";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const StyleWrapper = styled.div`
  .fc {
    height: 90vh;
  }
  
  .fc-scrollgrid-sync-inner{
    background: #1a2027;
    color: white;
  }
  
  .fc .fc-toolbar.fc-header-toolbar{
    margin-bottom: 0;
  }

  .fc-theme-standard td, .fc-theme-standard th{
    border: none;
  }
`

export const MonthLayout = () => {
    return(
            <StyleWrapper>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    customButtons={customButtons}
                    headerToolbar={{
                        left: '',
                        right: ''
                    }}
                    views={customViews}
                    dayHeaderContent={({date}, b, c) => {
                        return(
                            <div className="calendar__month--header">
                                <Chip label={days[date.getDay()]} variant="outlined" />
                            </div>
                        )
                    }}
                    dayCellContent={()=>{
                        return(
                            <div className="calendar__month--dayCell">
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        title
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </div>
                        )
                    }}
                />
            </StyleWrapper>
    )
}