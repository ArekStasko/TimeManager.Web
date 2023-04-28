import {Box, FormControl, IconButton, Slider, TextField, Tooltip, Typography} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
export const Details = () => {

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
                        <TextField id="filled-basic" label="Category" variant="filled" />
                    </Box>
                </Box>
                <Box fullWidth sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker label="Task start date" />
                        <Typography>
                            -
                        </Typography>
                        <DateTimePicker label="Task deadline" />
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
                            size="small"
                            defaultValue={50}
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