<template>
  <div class="game"></div>
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
    inventory() {
      return this.$store.state.inventory;
    },
    enemies() {
      return this.$store.state.activeEnemies;
    }
  },
  methods: {
    heroDamaged() {},
    enemyDamaged(enemy) {},
    itemUsed(item) {},
    itemEquipped(item) {}
  },
  components: {}
};
</script>


<style scoped>
</style>