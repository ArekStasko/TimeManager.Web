import {FormControl, IconButton, TextField, Tooltip, Typography} from "@mui/material";


export const General = ({data, setData}) => {

    return(
        <div className="general">
            <Typography>
                Provide General Information's about your Task
            </Typography>
            <FormControl fullWidth className="general__form">
                <TextField
                    value={data.Title}
                    onChange={e => setData({...data, Title: e.target.value})}
                    label="Title"
                    variant="filled"
                    margin="dense"
                />
                <TextField
                    value={data.Description}
                    onChange={e => setData({...data, Description: e.target.value})}
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