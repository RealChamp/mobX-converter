import React from 'react';
import { TCoin } from '../../types';
import { observer, inject } from 'mobx-react';
import CurrenciesStore from '../../stores/CurrenciesStore';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';

type TCryptoTable = {
  classes: any;
  currenciesStore?: CurrenciesStore;
};

const CryptoTable = inject('currenciesStore')(
  observer(({ classes, currenciesStore }: TCryptoTable) => {
    const items: TCoin[] = currenciesStore!.getItems;

    React.useEffect(() => {
        currenciesStore!.fetchCoins();
    }, []);
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
                  <TableRow key={coin.name}>
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
  }),
);

export default CryptoTable;
