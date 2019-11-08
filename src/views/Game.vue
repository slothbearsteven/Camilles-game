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
    items() {
      return this.$store.state.items;
    },
    enemy() {
      return this.$store.state.activeEnemy;
    }
  },
  methods: {
   attack(hero,enemy,item){
     this.$store.dispatch()
   }
  },
  components: {}
};
</script>


<style scoped>
</style>