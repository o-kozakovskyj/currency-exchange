<script lang="ts">
export default {
  name: 'ToCurrency',
  props: {
    toValue: {
      type: String,
      default: 'EUR'
    }
  },
  emits: ['update:toValue']
}
</script>
<template>
  <div class="input-box">
    <form>
      <label for="from">To</label>
      <select name="to" :value="toValue" @click="$emit('update:toValue', ($event.target as HTMLInputElement).value)">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="BTC" selected>BTC</option>
        <option value="ETH">ETH</option>
        <option value="BNB">BNB</option>
        <option value="XRP">XRP</option>
      </select>
    </form>
  </div>
</template>

<style>
select {
  display: flex;
  width: 6rem;
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
  font-weight: 600;
}
</style>
