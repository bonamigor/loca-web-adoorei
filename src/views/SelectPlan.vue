<template>
  <div class="font-sora">
    <Header />
    <Plans :is-selected="isSelected" :handle-plan-selection="handlePlanSelection" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Plans from '../components/Plans.vue';

const isSelected = ref(false)

const handlePlanSelection = (): void => {
  isSelected.value = isSelected.value === false ? true : false;
}
</script>

<style scoped>
hr.solid {
  border: 1px solid #C4C4C4 50%;
}
</style>