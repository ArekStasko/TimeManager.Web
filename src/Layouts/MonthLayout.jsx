import {Chip, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {weekDays, GetMonthLayout} from "../services/CalendarService";
import {Day} from "../components/Day";


export const MonthLayout = () => {
    const days = GetMonthLayout();
    return(
        <div className="monthLayout">
                <Table>
                    <TableHead>
                        <TableRow>
                            {weekDays.map(name => (
                                <TableCell align="center" className="monthLayout__dayBar--dayName">
                                    <Chip label={name} variant="outlined" color="primary" sx={{color: "#E8EAF6"}} />
                                </TableCell>
                            ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            days.map(week => (
                                <TableRow >
                                    {
                                        week.map(days => (
                                            <TableCell>
                                                {days}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
        </div>
    )
}