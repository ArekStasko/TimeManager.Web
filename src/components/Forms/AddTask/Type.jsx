import {FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip, Typography} from "@mui/material";
import {useState} from "react";
import InfoIcon from '@mui/icons-material/Info';

export const Type = ({data, setData}) => {

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
                    value={data.Type}
                    onChange={e => setData({...data, Type: e.target.value})}
                >
                    <MenuItem value={10}>Repetitive Task</MenuItem>
                    <MenuItem value={20}>One-Time Task</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}