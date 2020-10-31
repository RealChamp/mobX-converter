import React from 'react';
import axios from 'axios'
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
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
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

function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  const classes = useStyles();
  const [data, setData] = React.useState()

  React.useEffect(()=> {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
    .then(({data}) => {
      const coins = data.Data
    })
  }, [])
  return (
    <Container className={classes.root} maxWidth="lg">
      <Paper elevation={3}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="left">Calories</TableCell>
            <TableCell align="left">Calories</TableCell>
            <TableCell align="left">Calories</TableCell>
            <TableCell align="left">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
