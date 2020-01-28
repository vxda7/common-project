import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const CreateAnswer = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Grid>
  );
};

export default CreateAnswer;
