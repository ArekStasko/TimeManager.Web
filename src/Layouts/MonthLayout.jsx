import {Chip} from "@mui/material";
import {weekDays, GetMonthLayout} from "../services/CalendarService";
import {Day} from "../components/Day";


export const MonthLayout = () => {
    const days = GetMonthLayout();
    return(
        <div className="monthLayout">
            <div className="monthLayout__dayBar">
                {weekDays.map(name => (
                    <div className="monthLayout__dayBar--dayName">
                        <Chip label={name} variant="outlined" color="primary" sx={{color: "#E8EAF6"}} />
                    </div>
                ))
                }
            </div>
            <div className="monthLayout__body">
                {
                    days.map(component => (
                        <>
                            {component}
                        </>
                    ))
                }
            </div>
        </div>
    )
}