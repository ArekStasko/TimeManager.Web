import {GetMonthLayout} from "../services/CalendarService";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import {customButtons, customViews} from "../components/CalendarFragment";
import styled from "styled-components";
import {CardContent, Chip, IconButton, Typography} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useHistory} from 'react-router-dom';

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
    const RedirectToForm = (e, date) => {
         e.preventDefault();
         const history = useHistory();
         history.pushState(`/taskform/${date.toString()}`);
    }

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
                                <Chip sx={{ color: "white" }} label={days[date.getDay()]} variant="outlined" />
                            </div>
                        )
                    }}
                    dayCellContent={(date)=>{
                        const currentDate = new Date();
                        return(
                            <Day day={date.date.getDate() === currentDate.getDate()} className="calendar__month--dayCell">
                                <CardContent className="calendar__card">
                                    <div className="calendar__card--header">
                                        <Typography variant="h5" component="div">
                                            {days[date.date.getDay()]}
                                        </Typography>
                                        <Typography variant="body2">
                                            {date.date.getDate()} - {date.date.getFullYear()}
                                        </Typography>
                                    </div>
                                    <div className="calendar__card--btn">
                                        <IconButton color="primary">
                                            <AddBoxIcon onClick={e => RedirectToForm(e, date)} />
                                        </IconButton>
                                    </div>
                                </CardContent>
                            </Day>
                        )
                    }}
                />
            </StyleWrapper>
    )
}