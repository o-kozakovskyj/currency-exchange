
<template>
  <div class="result-amount">
    <span class="result-amount__line">
      {{ `${amount} ${from} = ${resultAmount?.toFixed(4)} ${to}` }}
    </span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    amount: {
      type: Number
    },
    resultAmount: {
      type: Number
    },
    from: {
      type: String
    },
    to: {
      type: String
    }
  }
}
</script>
<style>
.result-amount {
  margin-top: 1rem;
}

.result-amount__line {
  min-width: 200px;
  font-size: 1.2rem;
  font-weight: 600;
  overflow: hidden;
}
</style>
