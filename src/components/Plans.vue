<template>
  <div class="font-sora">
    <main class="flex flex-col items-center justify-center mt-2 text-center">
      <div v-if="isSelected" class="px-4 py-2 text-sm text-white bg-black rounded-md w-[180px] md:hidden">PLANO ESCOLHIDO</div>
      <v-carousel class="w-auto h-auto md:hidden" show-arrows="hover" hide-delimiters>
        <v-carousel-item v-for="(plan, i) in plans" :key="i" cover>
          <div class="flex flex-col items-center justify-center gap-y-4 mx-4 bg-white w-[348px] rounded-md py-10 px-12" @click="handlePlanSelection(plan)">
            <div v-if="i === 1" class="text-center bg-[#10C300] text-white rounded-[10px] p-2 mt-[-30px] z-1">MAIS USADO</div>
            <h1 class="text-2xl font-bold text-[#666666]">{{ plan.name }}</h1>
            <h1 class="text-3xl font-bold text-rosa-choque"><span v-if="plan.price > 0">R$</span>{{ plan.price === 0 ? 'Grátis' : plan.price }}<span v-if="plan.price > 0" class="text-xl font-normal">/mês</span></h1>
            <p class="text-xs">{{ plan.charge }}</p>
            <p class="text-xs">{{ plan.taxes }}</p>
            <hr class="solid">
            <p class="h-auto my-2 px-5 text-[17px]">{{ plan.ideal }}</p>
            <hr class="solid">
            <ButtonComponent type="submit" label="Escolha esse plano" @click="handlePlanSelection(plan)" />
            <p class="text-base font-bold text-left">Seu site em servidores <span class="underline">no {{ plan.server_location }}</span>.</p>
            <ul >
              <li class="text-base text-left" v-for="(benefit, i) in plan.benefits" :key="i">
                {{ benefit }}
              </li>
            </ul>
            <p class="text-base font-bold text-left">Suporte 24 horas, 7 dias por semana grátis;</p>
            <ul class="w-full text-base text-left">
              <p class="font-bold">Aplicativos disponíveis;</p>
              <li v-for="(app, i) in plan.available_apps" :key="i">
                {{ app }}
              </li>
            </ul>
            <ul class="text-base text-left" v-if="i > 0">
              <p class="font-bold">Migração Gratuita;</p>
              <li >Migramos todos seus sites para nossos servidores;</li>
            </ul>
            <ul>
              <p class="text-base font-bold text-left">Voce ainda tem</p>
              <li class="text-base text-left" v-for="(plus, i) in plan.plus" :key="i">
                {{ plus }}
              </li>
            </ul>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div class="hidden md:h-[900px] md:flex-row md:items-start md:justify-center md:flex md:mt-6">
        <div class="flex flex-col items-center justify-center gap-y-4 mx-4 bg-white w-[348px] rounded-md py-10 px-12" v-for="(plan, i) in plans" :key="i">
          <div v-if="i === 1" class="text-center mais-usado">MAIS USADO</div>
          <h1 class="text-2xl font-bold text-[#666666]">{{ plan.name }}</h1>
          <h1 class="text-3xl font-bold text-rosa-choque"><span v-if="plan.price > 0">R$</span>{{ plan.price === 0 ? 'Grátis' : plan.price }}<span v-if="plan.price > 0" class="text-xl font-normal">/mês</span></h1>
          <p class="text-xs">{{ plan.charge }}</p>
          <p class="text-xs">{{ plan.taxes }}</p>
          <hr class="solid">
          <p class="h-auto my-2 px-5 text-[17px]">{{ plan.ideal }}</p>
          <hr class="solid">
          <ButtonComponent type="submit" label="Escolha esse plano" @click="handlePlanSelection(plan)" />
          <p class="text-base font-bold text-left">Seu site em servidores <span class="underline">no {{ plan.server_location }}</span>.</p>
          <ul >
            <li class="text-base text-left" v-for="(benefit, i) in plan.benefits" :key="i">
              {{ benefit }}
            </li>
          </ul>
          <p class="text-base font-bold text-left">Suporte 24 horas, 7 dias por semana grátis;</p>
          <ul class="w-full text-base text-left">
            <p class="font-bold">Aplicativos disponíveis;</p>
            <li v-for="(app, i) in plan.available_apps" :key="i">
              {{ app }}
            </li>
          </ul>
          <ul class="text-base text-left" v-if="i > 0">
            <p class="font-bold">Migração Gratuita;</p>
            <li >Migramos todos seus sites para nossos servidores;</li>
          </ul>
          <ul>
            <p class="text-base font-bold text-left">Voce ainda tem</p>
            <li class="text-base text-left" v-for="(plus, i) in plan.plus" :key="i">
              {{ plus }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import planStore from '../store/plan';
import ButtonComponent from './ButtonComponent.vue';

export interface Plan {
  isSelected?: boolean;
  name: string;
  price: number;
  server_location: string;
  charge: string;
  taxes: string;
  ideal: string;
  benefits: Array<string>;
  available_apps: Array<string>;
  free_migration?: string;
  plus: Array<string>;
}

const plans: Array<Plan> = [
  {
    name: 'Hospedagem 1',
    price: 0,
    server_location: 'Estados Unidos',
    charge: 'você não paga nada para usar',
    taxes: 'sem taxa de setup',
    ideal: 'Ideal para quem está começando.',
    benefits: [
      'Servidores em nossos data center americanos;',
      'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
      '1 usuário de FTP para upload ou download;',
      '1 contas de e-mails profissionais;',
      '1 subdomínio gratuito;'
    ],
    available_apps: [
      'Wordpress',
      'Drupal',
      'entre outros...'
    ],
    plus: [
      'Webmail RoundCube;',
      'AntiSpam;',
      'Painel de gerenciamento de DNS;',
      'Painel de controle web;',
      'Configurações de PHP personalizáveis;',
      'Certificado SSL Grátis;',
      'Transferência ilimitada.'
    ]
  },
  {
    name: 'Hospedagem 2',
    price: 499,
    server_location: 'Brasil',
    charge: 'cobrado mensalmente',
    taxes: 'sem taxa de setup',
    ideal: 'Ideal para site com mais mais de 30k de visitas.',
    benefits: [
      'Servidores em nosso de São Paulo;',
      'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
      '10 usuário de FTP para upload ou download;',
      '30 contas de e-mails profissionais;',
      '10 bdomínio gratuito;'
    ],
    available_apps: [
      'Wordpress',
      'Drupal',
      'entre outros...'
    ],
    free_migration: 'Migramos todos seus sites para nossos servidores;',
    plus: [
      'Webmail RoundCube;',
      'AntiSpam;',
      'Painel de gerenciamento de DNS;',
      'Painel de controle web;',
      'Configurações de PHP personalizáveis;',
      'Certificado SSL Grátis;',
      'Transferência ilimitada.'
    ]
  },
  {
    name: 'Hospedagem 3',
    price: 999,
    server_location: 'Brasil',
    charge: 'cobrado mensalmente',
    taxes: 'sem taxa de setup',
    ideal: 'Ideal para site com mais mais de 60k de visitas.',
    benefits: [
      'Servidores em nosso de São Paulo;',
      'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
      'Ilimitados usuário de FTP para upload ou download;',
      'Ilimitadas contas de e-mails profissionais;',
      '50 bdomínio gratuito;'
    ],
    available_apps: [
      'Wordpress',
      'Drupal',
      'entre outros...'
    ],
    free_migration: 'Migramos todos seus sites para nossos servidores;',
    plus: [
      'Webmail RoundCube;',
      'AntiSpam;',
      'Painel de gerenciamento de DNS;',
      'Painel de controle web;',
      'Configurações de PHP personalizáveis;',
      'Certificado SSL Grátis;',
      'Transferência ilimitada.'
    ]
  }
]

interface PlanProps {
  isSelected: boolean;
  handlePlanSelection (): void;
}

defineProps<PlanProps>()

const router = useRouter()

const handlePlanSelection = (plan: Plan) => {
  planStore.dispatch('setPlan', plan)
  router.push({ name: 'Cadastro' })
}
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