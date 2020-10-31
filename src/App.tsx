import React from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Theme,
  FormControl,
  InputLabel,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      marginBottom: 20,
      marginTop: 20,
    },
    currencyInput: {
      minWidth: 'calc(70%-10px)',
    },
    currencyType: {
      minWidth: '30%',
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Paper elevation={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink>Валюта</InputLabel>
                <Select value={10}>
                  <MenuItem value={10}>Ten</MenuItem>

                  <MenuItem value={20}>Twenty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink>Валюта</InputLabel>
                <Select value={10}>
                  <MenuItem value={10}>Ten</MenuItem>

                  <MenuItem value={20}>Twenty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component='h5'>77.81 Российский рубль</Typography>
          </Paper>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
