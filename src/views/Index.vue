<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComponent from '../components/ButtonComponent.vue';
import InputComponent from '../components/InputComponent.vue';


const transition = ref(true)
const router = useRouter()

const handleLogin = () => {
  router.push({ name: 'Home' })
}

</script>

<template>
  <main  class="flex flex-col items-center justify-center w-auto h-screen m-10 font-sora">
    <figure>
      <img src="./assets/locaweb-logo.png" alt="locaweb logo" />
    </figure>
    <section class="my-5 bg-[#FFFFFF] border-2 border-[#E6EAF2] p-4 md:p-6 rounded-md md:w-auto">
      <header>
        <h2 class="text-lg md:text-[28px] font-bold">Entre na sua conta</h2>
        <h4 class="mt-2 text-sm md:text-lg">Para acessar sua conta informe seu e-mail e senha</h4>
      </header>
      <form @submit.prevent="handleLogin" class="flex flex-col justify-start my-4">
        <InputComponent label="E-mail" for-label="email" type="text" name="email" id="email" placeholder="Seu e-mail"/>
        <InputComponent class="mt-4" label="Senha" for-label="senha" type="password" name="senha" id="senha" placeholder="Sua senha"/>
        <a href="" class="text-end text-[#515D74] text-xs md:text-sm mt-1 hover:text-black">Esqueci minha senha</a>
        <ButtonComponent type="submit" label="Fazer Login" :transition="transition" />
      </form>
    </section>
    <footer class="flex flex-col items-center justify-center">
      <span class="text-xs md:text-sm">Ainda não tem conta? <a href="" class="underline text-rosa-choque hover:text-[#292D32]">Cadastre-se</a></span>
    </footer>
  </main>
  
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');
</style>
