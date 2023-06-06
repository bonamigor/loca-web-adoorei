<template>
  <header class="flex flex-col items-center justify-center text-center">
    <a href="/"><img src="../assets/locaweb-logo.png" alt="locaweb logo"></a>
    <h1 class="mt-4 text-3xl font-bold">Você está muito<br class="md:hidden" /> próximo de mudar sua<br class="md:hidden" /> forma de <span class="hidden underline md:block text-rosa-choque">hospedar seu site</span><span class="underline md:hidden text-rosa-choque">vender online</span></h1>
    <p class="hidden md:mt-4 md:block" v-if="!$route.path.includes('cadastro')">Escolha o seu plano</p>
    <button v-else class="text-white font-normal rounded-[5px] bg-rosa-choque mt-4 py-[12px] px-[12px]" type="button" @click="() => { $router.go(-1) }">Escolher outro plano</button>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>