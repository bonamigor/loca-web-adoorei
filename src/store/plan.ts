import { defineStore } from 'pinia'
import { Plan } from '../components/Plans.vue'

export const usePlansStore = defineStore('plans', {
  state: () => ({ plan: {} as Plan }),
  actions: {
    setPlan(plan: Plan) {
      this.plan = plan
    },
  },
})