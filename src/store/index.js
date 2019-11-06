import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hero: {
      name: "Camille",
      strength: 5,
      health: 50,
      mana: 50
    },
    //enemies "drops" are the amount of gold they drop.
    enemies: [
      { name: "gremlin", strength: 2, health: 10, drops: 2 },
      {}, {}, {}, {}],

    activeEnemies: [],

    items: [{ name: "Health Potion", type: "potion", modifier: 5 }],
    inventory: []

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
