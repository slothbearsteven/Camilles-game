import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hero: {
      name: "Camille",
      strength: 5,
      health: 50,
      mana: 50,
      image: "../assets/Camille.png"
    },
    enemies: [
      { name: "gremlin", strength: 2, health: 10 },
      {}, {}, {}, {}],

    activeEnemy: {
      name: "test",
      strength: 3,
      health: 10,
      image: "../assets/slime.png"
    },

    items: {
      hPotion: { name: "Health Potion", type: "potion", modifier: 5 },
      sword: { name: "Sword", type: "attack", modifier: 2 },
      shield: { name: "shield", type: "defense", modifier: 2 }
    },


  },
  mutations: {
    updatePlayer(state, hero) {
      state.hero = hero
    },
    updateEnemy(state, enemy) {
      state.activeEnemy = enemy
    }
  },
  actions: {

    attack({ commit, dispatch }, hero, enemy, item) {
      switch (item.name) {
        case "attack":
          let totaldmg = item.modifier + hero.strength
          enemy.health -= totaldmg
          hero.health -= enemy.strength
          dispatch("updatePlayer", hero)
          dispatch("updateEnemy", enemy)
          break;
        case "defense":
          totaldmg = enemy.strength - item.modifier
          hero.health -= totaldmg
          dispatch("updatePlayer", hero)
          break;
        case "buff":
          if (item.name == "Health Potion") {
            hero.health += item.modifier
          }
          else {
            hero.strength += item.modifier
          }
          hero.health -= enemy.strength
          dispatch("updatePlayer", hero)
          break;


        default:
          break;
      }
    }

  },
  modules: {
  }
})
