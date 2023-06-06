<template>
  <div class="font-sora">
    <main class="flex flex-col items-center justify-center mt-10 text-center">
      <div class="md:flex-col items-center justify-center md:items-center md:justify-start md:flex md:mt-[-40px]">
        <div class="flex flex-col items-center justify-center gap-y-4 mx-4 bg-white w-[348px] rounded-md py-10 px-12">
          <div class="px-4 py-2 text-sm text-white bg-black rounded-md w-[180px] mt-[-55px]">PLANO ESCOLHIDO</div>
          <h1 class="text-2xl font-bold text-[#666666]">{{ props.plan.name }}</h1>
          <h1 class="text-3xl font-bold text-rosa-choque"><span v-if="props.plan.price > 0">R$</span>{{ props.plan.price === 0 ? 'Grátis' : props.plan.price }}<span v-if="props.plan.price > 0" class="text-xl font-normal">/mês</span></h1>
          <p class="text-xs">{{ props.plan.charge }}</p>
          <p class="text-xs">{{ props.plan.taxes }}</p>
          <hr class="solid">
          <p class="h-auto my-2 px-5 text-[17px]">{{ props.plan.ideal }}</p>
          <hr class="solid">
          <p class="text-base font-bold text-left">Seu site em servidores <span class="underline">no {{ props.plan.server_location }}</span>.</p>
          <ul >
            <li class="text-base text-left" v-for="(benefit, i) in props.plan.benefits" :key="i">
              {{ benefit }}
            </li>
          </ul>
          <p class="text-base font-bold text-left">Suporte 24 horas, 7 dias por semana grátis;</p>
          <ul class="w-full text-base text-left">
            <p class="font-bold">Aplicativos disponíveis;</p>
            <li v-for="(app, i) in props.plan.available_apps" :key="i">
              {{ app }}
            </li>
          </ul>
          <ul class="text-base text-left" v-if="props.plan.free_migration">
            <p class="font-bold">Migração Gratuita;</p>
            <li >Migramos todos seus sites para nossos servidores;</li>
          </ul>
          <ul>
            <p class="text-base font-bold text-left">Voce ainda tem</p>
            <li class="text-base text-left" v-for="(plus, i) in props.plan.plus" :key="i">
              {{ plus }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Plan } from './Plans.vue';

interface PlanProps {
  plan: Plan
}

const props = defineProps<PlanProps>()
</script>

<style scoped>
.mais-usado {
  position: absolute;
  top: 215px;
  background-color: #10C300;
  color: white;
  width: 139px;
  height: 30px;
  border-radius: 10px;
  padding-top: 4px;
}

li {
  list-style: url('../assets/list.png');
  margin-left: 22px;
  margin-top: 5px;
}
hr.solid {
  border: 1px solid #C4C4C4 50%;
  width: 100%;
}
</style>