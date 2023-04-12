import {Chip} from "@mui/material";


export const MonthLayout = () => {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return(
        <div className="monthLayout">
            {weekDays.map(name => (
                <div className="monthLayout__dayName">
                    <Chip label={name} variant="outlined" color="primary" sx={{color: "#E8EAF6"}} />
                </div>
                ))
            }
        </div>
    )
}