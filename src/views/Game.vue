<template>
  <div class="game">
    <div class="container">
      <div class="row">
        <!-- Place character images here -->
        <div class="col-4 enemy">
          <img :src="enemy.image" alt />
        </div>
        <div class="col-4 hero">
          <img :src="hero.image" alt />
        </div>
      </div>
      <div class="row stats">
        <!-- Place info/options here -->
        <div class="col-2">
          {{enemy.name}}
          <br />
          {{enemy.health}}
        </div>
        <div class="col-6"></div>
        <div class="col-2">
          {{hero.name}}
          <br />
          {{hero.health}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "game",
  data() {
    return {};
  },
  computed: {
    hero() {
      return this.$store.state.hero;
    },
    items() {
      return this.$store.state.items;
    },
    enemy() {
      return this.$store.state.activeEnemy;
    }
  },
  methods: {
    attack(hero, enemy, item) {
      this.$store.dispatch("attack", hero, enemy, item);
    }
  },
  components: {}
};
</script>


<style scoped>
.image {
  height: 30px;
  width: 30px;
}
</style>