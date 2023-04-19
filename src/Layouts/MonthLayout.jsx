import {GetMonthLayout} from "../services/CalendarService";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import {customButtons, customViews} from "../components/CalendarFragment";
import styled from "styled-components";
import {Chip} from "@mui/material";

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
                            <div>

                            </div>
                        )
                    }}
                />
            </StyleWrapper>
    )
}