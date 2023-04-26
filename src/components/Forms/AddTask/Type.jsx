import {FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip, Typography} from "@mui/material";
import {useState} from "react";
import InfoIcon from '@mui/icons-material/Info';

export const Type = () => {
    const [type, setType] = useState('');


    return(
        <div className="type">
            <Typography>
                Provide type of your task
                <Tooltip title="Repetitive Task is for example making your bed &#10; One-Time Task is for example Call your grandpa">
                    <IconButton>
                        <InfoIcon />
                    </IconButton>
                </Tooltip>
            </Typography>
            <FormControl fullWidth className="type__form">
                <Select
                    value={type}
                    onChange={e => setType(e.target.value)}
                >
                    <MenuItem value={10}>Repetitive Task</MenuItem>
                    <MenuItem value={20}>One-Time Task</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}