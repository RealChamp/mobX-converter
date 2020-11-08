import { makeObservable, observable, computed, action } from 'mobx';
import { TCoin, TCoinDiff } from '../types';
import axios from 'axios';

class CurrenciesStore {
   items: TCoin[] = [];
   diffItems: TCoinDiff = {};
  // makeObservable for class. makeAutoObservable for function
  constructor() {
    makeObservable(this, {
      items: observable,
      diffItems: observable,
      getItems: computed,
      getDiffItems: computed,
      setItems: action,
      fetchCoins: action,
      diffCurrencies: action
    });
  }

  get getItems() {
    return this.items;
  }

  get getDiffItems() {
    return this.diffItems;
  }

  setItems = (items: TCoin[]): void => {
      this.diffItems = this.diffCurrencies(this.items, items).reduce(
          (initObj: TCoinDiff, obj: TCoin) => {
            const newObj: TCoin = items.find(o => o.name === obj.name)!;
            const oldObj: TCoin = this.items.find(itemObj => itemObj.name === newObj.name)!;
            const color: string =
              newObj.price === oldObj.price ? '' : newObj.price > oldObj.price ? 'green' : 'red';
    
            initObj[newObj.name] = color;
    
            return initObj;
          },
          {}
      )
    this.items = items;
      setTimeout(()=> {
        this.diffItems = {}
      }, 6000)
  }

  fetchCoins() {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        this.setItems(coins);
      });
  }
  
  diffCurrencies(arr1: TCoin[], arr2: TCoin[]) {
    return arr1.filter((obj, index) => {
      if (obj.price !== arr2[index].price) {
        return true;
      }
      return false;
    });
  }
}

export default CurrenciesStore;
