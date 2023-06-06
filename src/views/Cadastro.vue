<template>
  <div class="font-sora">
    <Header />
    <main class="flex flex-col items-center justify-center w-full mt-10 md:items-start md:flex-row">
      <form @submit.prevent class="flex flex-col p-4 bg-white w-[361px] md:w-[617px] border-1 border-[#E6EAF2] rounded-md">
        <h1 class="text-3xl font-bold text-center">Dados pessoais</h1>
        <p class="mt-4 mb-2">Informe seus dados pessoais para acesso à sua conta</p>
        <InputComponent v-model="user.name" label="Nome Completo" for-label="name" type="text" name="name" id="name" placeholder="Informe seu nome completo"/>
        <InputComponent v-model="user.phone" label="Celular" for-label="phone" type="text" name="phone" id="phone" placeholder="(99) 99999-0000"/>
        <InputComponent v-model="user.email" label="E-mail" for-label="email" type="text" name="email" id="email" placeholder="Seu e-mail"/>
        <InputComponent v-model="user.password" label="Senha" for-label="password" type="password" name="password" id="password"/>
        <p class="text-[10px] mb-2">No mínimo 8 caracteres</p>
        <InputComponent v-model="user.password" label="Confirme sua senha" for-label="cpassword" type="password" name="cpassword" id="cpassword"/>
        <hr class="mt-2 w-80 solid">
        <h1 class="mt-4 text-3xl font-bold text-center">Dados do seu site</h1>
        <InputComponent v-model="user.website" label="Nome do seu site" for-label="site" type="text" name="site" id="site" placeholder="Meu site"/>
        <p class="text-[10px] mb-2">Exatamente igual o título do seu site</p>
        <hr class="w-80 solid">
        <label class="mt-4" for="check">
          <input class="mr-2 border-rosa-choque" type="checkbox" name="check" id="check">
          Ao concluir com seu cadastro você concorda com nossos termos de uso e politicas de privacidade.
        </label>
        <ButtonComponent type="submit" label="Criar conta" @click="handleSubmit"/>
      </form>
      <PlanComponent :plan="plan"  />
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import Header from '../components/Header.vue';
import InputComponent from '../components/InputComponent.vue';
import PlanComponent from '../components/Plan.vue';
import { Plan } from '../components/Plans.vue';
import router from '../router';
import { usePlansStore } from '../store/plan';

interface CadastroProps {
  plan: Plan;
}

const store = usePlansStore()

defineProps<CadastroProps>()

const plan = reactive(store.plan)
const user = reactive({
  name: '',
  phone: '',
  email: '',
  password: '',
  website: ''
})

const handleSubmit = () => {
  try {
    fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email: user.email,
                    username: user.name.toLowerCase().trim(),
                    password: user.password,
                    name:{
                        firstname: user.name.split(' ')[0],
                        lastname: user.name.split(' ')[1]
                    },
                    phone: user.phone
                }
            )
        })
            .then(res=>res.json())
            .then(()=>router.push({ name: 'Home' }))
  } catch (error) {
    alert('Erro ao efetuar o cadastro.')
  }
}
</script>

<style scoped>
hr.solid {
  border: 1px solid #C4C4C4 50%;
}
</style>