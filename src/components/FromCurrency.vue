<script lang="ts">
export default {
  props: {
    fromValue: {
      type: String,
      default: 'USD'
    }
  },
  emits: ['update:fromValue'],
  name: 'FromCurrency'
}
</script>
<template>
  <div class="input-box">
    <form>
      <label for="from">From</label>
      <select name="from" :value="fromValue"
        @input="$emit('update:fromValue', ($event.target as HTMLInputElement).value)">
        <option value="USD" selected>USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
        <option value="GBP">GBP</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="BNB">BNB</option>
        <option value="XRP">XRP</option>
      </select>
    </form>
  </div>
</template>
<style>
input {
  display: flex;
  width: 4rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
  padding: 12px;
  color: rgb(20, 30, 55);
  background: none;
  margin-bottom: 1rem;
}

label {
  align-self: flex-start;
  font-size: 14px;
  margin-bottom: 4px;
}

@media (min-width: 768px) {
  label {
    font-size: 18px;
  }

  input,
  select {
    margin-right: 1rem;
  }
}
</style>
