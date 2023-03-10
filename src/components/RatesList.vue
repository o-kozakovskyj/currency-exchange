
<template>
  <div class="container">
    <div class="currency-list" >
      <div class="currency-list__from">
        <span>1</span>
        <form>
          <select name="from" class="currency-list__select" v-model="from">
            <option v-for="currency in fromOptions" :key="currency" :value="currency">{{ currency }}</option>
          </select>
        </form>
        <span>=</span>
      </div>
      <div class="currency-list__rates" v-show="!isModalOpen">
        <div v-for="(rate, currency) in rates" :key="currency">
          <span>{{ rate }}</span>
          <span>{{ currency }}</span>
        </div>
      </div>
    </div>
    <div class="currency-list__btns">
      <button class="button" @click="update" :disabled="delay">Refresh rates</button>
      <button class="button" @click="($event) => (isModalOpen = true)">Add currency</button>
    </div>
    <ModalAddCurrency v-if="isModalOpen" @close="isModalOpen = false" @add="add($event)" />
  </div>
</template>
<script lang="ts">
declare interface Rates {
  [key: string]: number
}
import { getRate } from '@/gateways/gateway'
import ModalAddCurrency from '@/components/ModalAddCurrency.vue'

export default {
  name: 'RatesList',
  components: {
    ModalAddCurrency
  },
  data: () => {
    return {
      from: 'USD',
      fromOptions: ['USD', 'EUR', 'UAH'],
      to: ['USD', 'EUR', 'UAH', 'BTC', 'ETH',],
      rates: {} as Rates,
      delay: false,
      isModalOpen: false
    }
  },
  mounted() {
    if (localStorage.getItem('to') !== null) {
      this.to = JSON.parse(localStorage.getItem('to') || '{}')
    }
    this.getChoosenList(this.from)
  },
  watch: {
    from() {
      this.getChoosenList(this.from)
    },
    to() {
      localStorage.setItem('to', JSON.stringify(this.to))
    },
  },
  unmounted() {
    localStorage.removeItem('to')
  },
  methods: {
    getChoosenList(from: string ) {
      return getRate(from).then((data) => {
        this.rates = Object.entries(data).filter(([key]) => this.to.includes(key) && key !== from).reduce((acc, [key, value]) => {
          acc[key] = value
          return acc
        }, {} as Rates)
      })
    },
    update() {
      this.delay = true
      this.getChoosenList(this.from)
      setTimeout(() => {
        this.delay = false
      }, 5000)
    },
    add(currency: string) {
      this.to.push(currency)
      this.isModalOpen = false
      this.getChoosenList(this.from)
      localStorage.setItem('to', JSON.stringify(this.to))
    }
  },
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 5rem;
  padding: 2rem;
}

.currency-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
}

.currency-list__btns button {
  margin: 0.5rem 0;
}

@media (min-width: 768px) {
  .container {
    margin-top: 1rem;
  }

  .currency-list {
    display: flex;
    margin: 4rem;
    flex-direction: row;
  }

  .currency-list__btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .currency-list__btns button {
    margin: 0 1rem;
  }
}

.currency-list__from {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.currency-list__from span {
  margin: 0.6rem;
}

.currency-list__select {
  display: flex;
  width: 3.1rem;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
}

.currency-list__rates {
  position: relative;
}

.currency-list__rates span {
  margin: 8px 4px;
}
</style>
