<script setup lang="ts">
interface InputProps {
  label: string;
  forLabel: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

defineProps<InputProps>()
</script>

<template>
  <label class="text-xs md:text-sm" :for="forLabel">{{ label }}</label>
  <input class="py-4 px-2 md:py-[30px] md:px-[16px] text-xs md:text-sm rounded-[5px] placeholder:text-[#292D32] mt-1" :type="type" :name="name" :id="id" :placeholder="placeholder">
</template>

<style scoped>
input {
  border: 2px solid #E6EAF2;
}

input + label {
  margin-top: 20px;
}
</style>
