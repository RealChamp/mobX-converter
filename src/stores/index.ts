import CurrenciesStore from './CurrenciesStore'
import ConverterStore from './ConverterStore'

const store = { 
    currenciesStore: new CurrenciesStore(),
    converterStore: new ConverterStore()
}

export default store