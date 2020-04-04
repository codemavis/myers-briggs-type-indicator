import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from "@material-ui/core/Grid";
import { Typography, TextField, Card, Button, MenuItem } from "@material-ui/core";

let Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
];

let mainCss = {
    marginTop: 20,
    padding: 20
};

function Main() {

    const history = useHistory();

    const formOnSubmit = () => {
        history.push('/questionnaire/');
    };

    return (
        <div className="container">
            <Card style={mainCss}>
                <Grid>
                    <Typography variant="h6">Personal Detail</Typography>
                </Grid>

                <form onSubmit={formOnSubmit} >

                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField id="txt-email" type="email" label="Email Address" placeholder="Enter Email" variant="outlined" fullWidth size="small" required />

                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField id="txt-name" label="Name" placeholder="Name" variant="outlined" fullWidth size="small" required />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth id="txt-gender" label="Gender" value={"Male"} placeholder="Placeholder" variant="outlined" select size="small" required >
                                {Gender.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField id="txt-age" label="Age" placeholder="Placeholder" variant="outlined" fullWidth type="number" size="small" required />
                        </Grid>

                        <Grid item md={3}>
                            <Button type="submit" fullWidth variant="contained" color="primary" >Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </div>
    );
}

export default Main;
