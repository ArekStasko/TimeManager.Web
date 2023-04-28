import {FormControl, IconButton, TextField, Tooltip, Typography} from "@mui/material";


export const General = () => {

    return(
        <div className="general">
            <Typography>
                Provide General Information's about your Task
            </Typography>
            <FormControl fullWidth className="general__form">
                <TextField label="Title" variant="filled" margin="dense"/>
                <TextField
                    margin="dense"
                    label="Description"
                    multiline
                    rows={9}
                    variant="filled"
                />
            </FormControl>
        </div>
    )
}