<template>
  <input 
    type="text"
    :value="modelValue"
    @input="emit('input',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <!-- <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  > -->
</template>

<script setup lang="ts" name="AtguiguInput">
  // defineProps(['ming','mima'])
  // const emit = defineEmits(['update:ming','update:mima'])
  defineProps(['modelValue'])
  const emit=defineEmits(['input'])
</script>

<style scoped>

</style>