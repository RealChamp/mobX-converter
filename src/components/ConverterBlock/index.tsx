import React from 'react'
import {
    MenuItem,
    Paper,
    Select,
    TextField,
    FormControl,
    InputLabel,
    Typography,
  } from '@material-ui/core';

type TInputCurrency = {
    classes: any
}

const ConverterBlock: React.FC<TInputCurrency> = ({classes}) => {
    return (
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
        <Typography variant="h5" component="h5">
          77.81 Российский рубль
        </Typography>
      </Paper>
    )
}

export default ConverterBlock