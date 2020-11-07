import {makeObservable, observable, computed, action} from 'mobx'
import {TCoin} from '../types'
import axios from 'axios'

class CurrenciesStore { 
    items: TCoin[] = []

    constructor() {
        makeObservable(this, {
            items: observable,
            getItems: computed,
            setItems: action,
            fetchCoins: action
        })
    }

    get getItems() {
        return this.items
    }

    setItems(items: TCoin[]) {
        return this.items = items
    }

    fetchCoins() {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
        .then(({data}) => {
            const coins: TCoin[] = data.Data.map((coin: any) => {
                const obj: TCoin = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE.toFixed(3),
                    volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
                }
                return obj
            })
            this.setItems(coins)
        })
    }
}

export default CurrenciesStore
