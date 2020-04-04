import React from 'react';
import { Card, Grid, Radio, RadioGroup, Typography, FormLabel } from "@material-ui/core";

let mainCss = {
    marginTop: 20,
    padding: 20
};


const Question = ({ questionList, handleChoices }) => {
    return (
        <div className="q1 container" id={questionList.question_id} style={mainCss}>
            <Card style={{ padding: 10 }} >
                <Grid container>
                    <Grid item md={3}>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body1" id={'q' + questionList.question_id}>
                            {questionList.question_desc}
                        </Typography>
                    </Grid>
                    <Grid item md={3}>
                    </Grid>
                </Grid>
                <RadioGroup >
                    <Grid container>
                        <Grid item md={3}>
                            <FormLabel component="legend">Agree</FormLabel>
                            <Radio onChange={handleChoices} value="agree" name={'c' + questionList.question_id} inputProps={{ "aria-label": "A" }} id={'txt-agree-' + questionList.question_id} required />
                        </Grid>
                        <Grid item md={6}>
                        </Grid>
                        <Grid item md={3}>
                            <FormLabel component="legend">Disagree</FormLabel>
                            <Radio onChange={handleChoices} value="disAgree" name={'c' + questionList.question_id} inputProps={{ "aria-label": "A" }} id={'txt-disagree-' + questionList.question_id} />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </Card>
        </div>
    );
}

export default Question;