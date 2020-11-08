<template>
  <div id="app" class="container">
    <pot
      v-for="(pot, index) in pots"
      :key="index"
      :type="pot.type"
      :amount="pot.amount"
      :currency="pot.currency"
      :must_drop_in="pot.must_drop_in"
      :imageType="pot.imageType"
    />
  </div>
</template>

<script>
import Pot from '@/components/Pot.vue';

export default {
  name: 'App',
  components: {
    Pot,
  },
  computed: {
    pots() {
      return this.$store.getters.getPots;
    },
  },
  mounted() {
    this.$store.dispatch('initUpdates');
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
.container {
  height: 100vh;
  width: 20vw;
  max-width: 300px;
  min-width: 150px;

  margin: -8px;

  padding: .5em 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('assets/bg.png');
}
</style>
