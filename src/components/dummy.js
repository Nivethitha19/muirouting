import { Card, Typography } from "@mui/material";
import React from "react";
import { TextField, Stack, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MiniDrawer from "./navbar";



const Register = () => {

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <MiniDrawer />
      
        <Card className='register' sx={{ boxShadow: 3 }}>


            <Stack justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h6">
                    Registration form
                </Typography>
                <TextField id="outlined-basic" label="Enter Your name" variant="outlined" required />
                <TextField id="outlined-basic" label="Password" variant="outlined" required />
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={4}
                />
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" required />


                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        row
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
              
              <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField id="outlined-basic" {...params} />}
              />
         
      </LocalizationProvider><br></br>
      <Button variant="contained">Save</Button>

            </Stack>
            
        </Card>
        </>
    )
}

export default Register;