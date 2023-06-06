<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ButtonComponent from './components/ButtonComponent.vue';


const transition = ref(true)
const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log(`Dados usuario: ${username.value} + ${password.value}`)
  try {
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body: JSON.stringify({ username: username.value, password: password.value })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            router.push({ name: 'Home' })
  } catch (error) {
    alert('Nao foi possivel realizar o login.')
    console.error(error);
  }
}
</script>

<template>
  <router-view />
  <main v-if="route.path === '/'" class="flex flex-col items-center justify-center w-auto h-screen m-10 font-sora">
    <figure>
      <img src="./assets/locaweb-logo.png" alt="locaweb logo" />
    </figure>
    <section class="my-5 bg-[#FFFFFF] border-2 border-[#E6EAF2] p-4 md:p-6 rounded-md md:w-auto">
      <header>
        <h2 class="text-lg md:text-[28px] font-bold">Entre na sua conta</h2>
        <h4 class="mt-2 text-sm md:text-lg">Para acessar sua conta informe seu e-mail e senha</h4>
      </header>
      <form @submit.prevent="handleLogin" class="flex flex-col justify-start my-4">
        <label class="text-xs md:text-sm" for="email">E-mail</label>
        <input class="py-4 px-2 md:py-[30px] md:px-[16px] text-xs md:text-sm rounded-[5px] placeholder:text-[#292D32] mt-1" type="text" name="email" id="email" placeholder="Seu e-mail" v-model="username">
        <label class="text-xs md:text-sm" for="password">Senha</label>
        <input class="py-4 px-2 md:py-[30px] md:px-[16px] text-xs md:text-sm rounded-[5px] placeholder:text-[#292D32] mt-1" type="password" name="password" id="password" placeholder="Sua senha" v-model="password">
        <a href="" class="text-end text-[#515D74] text-xs md:text-sm mt-1 hover:text-black">Esqueci minha senha</a>
        <ButtonComponent type="submit" label="Fazer Login" :transition="transition" />
      </form>
    </section>
    <footer class="flex flex-col items-center justify-center">
      <span class="text-xs md:text-sm">Ainda não tem conta? <a href="/selecionar-plano" class="underline text-rosa-choque hover:text-[#292D32]">Cadastre-se</a></span>
    </footer>
  </main>
  
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');

  input {
    border: 2px solid #E6EAF2;
  }
  
  input + label {
    margin-top: 20px;
  }
</style>
