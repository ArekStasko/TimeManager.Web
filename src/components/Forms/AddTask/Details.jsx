import {Box, FormControl, IconButton, Slider, TextField, Tooltip, Typography} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { setTaskData } from '../../../actions';
import {connect} from "react-redux";


export const Details = ({data, setData}) => {

    return(
        <div className="details">
            <Typography>
                Provide details about your Task
            </Typography>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                <Box>
                    <Typography variant="caption">
                        Category of your Task
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            value={data.Category}
                            onChange={e => setData({...data, Category: e.target.value})}
                            id="filled-basic"
                            label="Category"
                            variant="filled" />
                    </Box>
                </Box>
                <Box fullWidth sx={{ display: 'flex', flexDirection: 'column' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            value={data.StartDate}
                            onChange={e => setData({...data, StartDate: e})}
                            label="Task start date"
                            sx={{ marginBottom: "20px" }}
                        />
                        <DateTimePicker
                            value={data.Deadline}
                            onChange={e => setData({...data, Deadline: e})}
                            label="Task deadline"
                        />
                    </LocalizationProvider>
                </Box>
                <Box>
                    <Typography variant="caption">
                        Priority of your Task
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Tooltip title="A little Important">
                            <IconButton>
                                <LowPriorityIcon />
                            </IconButton>
                        </Tooltip>
                        <Slider
                            value={data.Priority}
                            onChange={e => setData({...data, Priority: e.target.value})}
                            size="small"
                            aria-label="Small"
                        />
                        <Tooltip title="Really Important">
                            <IconButton>
                                <PriorityHighIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </FormControl>
        </div>
    )
}