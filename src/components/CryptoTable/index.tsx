import React, {useContext} from 'react';
import {observer} from 'mobx-react'
import { TCoin } from '../../types';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import {CurrenciesStore} from '../../index'

type TCryptoTable = {
  classes: any;
};

const CryptoTable = observer(({ classes }: TCryptoTable) => {
  const currencies = useContext(CurrenciesStore)
  const items: any = currencies?.currenciesStore.getItems
  React.useEffect(()=> {
    currencies?.currenciesStore.fetchCoins()
  },[])
  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">FullName</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">Volume24Hour</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!items.length
          ? 'Загрузка...'
          : items.map((coin:TCoin) => (
              <TableRow hover key={coin.name}>
                <TableCell align="left">
                  <img
                    className={classes.currencyIcon}
                    src={coin.imageUrl}
                    alt={`${coin.name} icon`}
                  />
                </TableCell>
                <TableCell align="left">{coin.name}</TableCell>
                <TableCell align="left">{coin.fullName}</TableCell>
                <TableCell align="left">$ {coin.price}</TableCell>
                <TableCell align="left">$ {coin.volume24Hour}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
})

/* ({ classes }: TCryptoTable) => {
    const items: any = []

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Volume24Hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length
              ? 'Загрузка...'
              : items.map((coin:TCoin) => (
                  <TableRow hover key={coin.name}>
                    <TableCell align="left">
                      <img
                        className={classes.currencyIcon}
                        src={coin.imageUrl}
                        alt={`${coin.name} icon`}
                      />
                    </TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">$ {coin.price}</TableCell>
                    <TableCell align="left">$ {coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } */

export default CryptoTable;
