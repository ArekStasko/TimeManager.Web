import {GetMonthLayout} from "../services/CalendarService";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import {customButtons, customViews} from "../components/CalendarFragment";
import styled from "styled-components";
import {CardContent, Chip, Typography} from "@mui/material";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const MonthLayout = () => {

     const Day = styled.div`
        border-color: ${props => props.day ? "green" : "white"}
     `

     const StyleWrapper = styled.div`
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

  .fc .fc-daygrid-day-top{
    display: flex;
    justify-content: center;
  }
`

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
                    dayCellContent={(date)=>{
                        const currentDate = new Date();
                        return(
                            <Day day={date.date.getDate() === currentDate.getDate()} className="calendar__month--dayCell">
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {days[date.date.getDay()]}
                                    </Typography>
                                    <Typography variant="body2">
                                        {date.date.getDate()} - {date.date.getFullYear()}
                                    </Typography>
                                </CardContent>
                            </Day>
                        )
                    }}
                />
            </StyleWrapper>
    )
}