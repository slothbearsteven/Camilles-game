<template>
  <div class="game">
<div class="container">
  <div class="row">
    <!-- Place characters here -->
  </div>
  <div class="row">
  <!-- Place info/options here -->
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
</style>