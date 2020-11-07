import React from 'react';
import useStyles from './styles'
import {CryptoTable, ConverterBlock} from './components'
import {observer} from 'mobx-react'
import {
  Container,
  Grid,
} from '@material-ui/core';

function App() {
  const classes: any = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
        <CryptoTable classes={classes}/>
        </Grid> 
        <Grid item xs={4}>
         <ConverterBlock classes={classes}/>
        </Grid>
        </Grid>
    </Container>
  );
}

export default App;
