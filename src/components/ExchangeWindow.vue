<script lang="ts">
declare interface Rates {  
    [key: string]: number
}
import { getRate} from '../api/api'
import FromCurrency from './FromCurrency.vue'
import ToCurrency from './ToCurrency.vue'
import ResultAmount from './ResultAmount.vue'
import RatesList from './RatesList.vue'

export default {
  name: 'ExchangeWindow',
  components: {
    FromCurrency,
    ToCurrency,
    ResultAmount,
    RatesList
  },
  data() {
    return {
      amount: 100,
      from: 'USD',
      to: 'BTC',
      rates: {} as Rates,
    }
  },
  computed: {
    maxToChange() {
      if (this.from === 'USD') {
        return 10000
      }
      return 10000 * this.rates.USD
    }
  },
  mounted() {
    getRate(this.from).then((data) => {
      this.rates = data
    })
    
  },
  watch: {
    amount() {
      if (this.amount > this.maxToChange) {
        this.amount = this.maxToChange
        alert(`You can not change more than ${this.maxToChange} ${this.from}`)
      }
    },
    from() {
      getRate(this.from).then((data) => {
        this.rates = data
      })
      this.amount = 100
    },
    to() {
      getRate(this.from).then((data) => {
        this.rates = data
      })
      this.amount = 100
    }
    
  },
  methods: {

    changeToCurrency() {
      const { from, to, amount, rates } = this
      if (from === to) {
        return amount
      }
      return rates[to] * amount
    }
  }
}
</script>
<template>
  <div>
    <div class="paper">
      <div class="paper__inputs">
        <div class="input-box">
          <form>
            <label for="amoun">Amount</label>
            <input type="number" name="amoun" v-model.number="amount" :min="1" />
          </form>
        </div>
        <FromCurrency v-model:fromValue="from" />
        <ToCurrency v-model:toValue="to" />
      </div>
      <ResultAmount :resultAmount="changeToCurrency()" :amount="amount" :from="from" :to="to" />
    </div>
    <RatesList />
  </div>
</template>
<style>
.paper {
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 50%;
  padding: 25px 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  margin: 0;
}

.paper__inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .paper__inputs {
    flex-direction: row;
  }
}
</style>
};
