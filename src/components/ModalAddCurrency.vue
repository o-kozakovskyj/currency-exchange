<script lang="ts">
import mixin from '../mixins/currencyList'
export default {
  emits: ['close', 'add'],
  mixins: [mixin]
}
</script>
<template>
  <div class="paper">
    <button @click="$emit('close')" class="btn-close">X</button>
    <form>
      <label for="currency">Choose currency</label>
      <select name="currency" class="modal__currency" @change="$emit('add', ($event.target as HTMLInputElement).value)">
        <option v-for="currency in $data.currencyList" :key="currency" :value="currency">
          {{ currency }}
        </option>
      </select>
    </form>
  </div>
</template>

<style scoped>
.modal__currency {
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  margin: 0;
  padding: 4px 0;
  color: rgb(20, 30, 55);
  background: none;
  margin-bottom: 1rem;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 0;
  margin: 4px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  color: #e8e8e8;
}
.btn-close:hover {
  color: #000
}

.btn-add {
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
  padding: 8px;
}
</style>
