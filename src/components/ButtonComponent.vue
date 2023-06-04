<script setup lang="ts">
interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  label: string;
  transition: boolean;
}

defineProps<ButtonProps>()
</script>

<template>
  <button v-if="transition" class="text-white font-normal uppercase rounded-[5px] bg-rosa-choque mt-4 py-[24px] px-[18px] transition ease-in-out delay-150 hover:bg-rosa-choque-forte" :type="type" >{{ label }}</button>
  <button v-else class="text-white font-normal uppercase rounded-[5px] bg-rosa-choque mt-4 py-[24px] px-[18px]" :type="type">{{ label }}</button>
</template>