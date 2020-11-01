import React from 'react';
import axios from 'axios';
import {TCoin} from './types'
import useStyles from './styles'
import {CryptoTable, ConverterBlock} from './components'
import {
  Container,
  Grid,
} from '@material-ui/core';

function App() {
  const classes = useStyles();

  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(2),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };

          return obj;
        });
        setAllCoins(coins);
      });
  }, []);
  return (
    <Container className={classes.root} maxWidth="lg">

        <Grid item xs={8}>
        <CryptoTable classes={classes} items={allCoins}/>
        </Grid> 
        <Grid item xs={4}>
         <ConverterBlock classes={classes}/>
        </Grid>
    </Container>
  );
}

export default App;
