import {weekDays, GetMonthLayout} from "../services/CalendarService";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import {customButtons, customViews} from "../components/CalendarFragment";

export const MonthLayout = () => {
    const days = GetMonthLayout();
    return(
        <div className="monthLayout">
               <FullCalendar
                   plugins={[dayGridPlugin]}
                   initialView="dayGridMonth"
                   customButtons={customButtons}
                   headerToolbar={{
                       left: '',
                       right: ''
                   }}
                   views={customViews}
               />
        </div>
    )
}