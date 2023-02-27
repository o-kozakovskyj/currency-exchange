<script lang="ts">
export default {
  name: 'AmountToChange',
  props: {
    amountValue: {
      type: Number,
      default: 100
    },
    rateToDollarValue: {
      type: Number,
      default: 1
    }
  },
  methods: {
    updateAmountValue(event: Event) {
      this.$emit('update:amountValue', Number((event.target as HTMLInputElement).value))
    }
  },
  emits: ['update:amountValue']
}
</script>
<template>
  <div class="input-box">
    <form>
      <label for="amount">Amount</label>
      <input type="number" name="amount" :value="amountValue" @input="updateAmountValue" min="1" />
    </form>
  </div>
</template>