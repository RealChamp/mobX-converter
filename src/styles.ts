import {
    createStyles,
    makeStyles,
    Theme
  } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
      display: 'flex',
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
    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: '50%',
    }
  }),
);

export default useStyles