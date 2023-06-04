<template>
<div class="flex flex-col px-6 mt-6 font-sora">
  <nav class="flex flex-row justify-between">
    <picture>
      <img src="../assets/locaweb-logo.png" alt="locaweb logo" />
    </picture>
    <div class="flex flex-col items-center justify-center">
      <img src="../assets/acc-button.png" alt="botao perfil">
      <p class="mt-2">Sair</p>
    </div>
  </nav>
  <main class="flex flex-col md:items-center">
    <header class="flex flex-col mt-8 text-left  md:w-[975px]">
      <h1 class="text-xl font-bold md:text-[28px]">Olá João,</h1>
      <p class="mt-2 text-sm md:text-base">Seja bem vindo a sua conta de hospedagem.</p>
    </header>
    <main class="mt-6">
      <picture>
        <img src="../assets/home-logged-in.png" alt="video youtube">
      </picture>
      <p class="mt-6 text-sm md:text-base">Caso tenha alguma dúvida, <a href="" class="underline">visite nossa central de ajuda</a>.</p>
    </main>
  </main>

</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>