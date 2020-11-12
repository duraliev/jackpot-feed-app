<template>
  <div id="app">
    <div class="container">
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
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: -8px;
  height: 100vh;
  width: 20vw;
  max-width: 300px;
  min-width: 150px;
  background-image: url('assets/bg.png');
  padding: .5em 1em;
  position: relative;
  z-index: -50;
}
.container {

  width: 100%;
  padding-top: 1em;
  border-radius: 8px;
  box-shadow: inset 0 0 3em #322f63;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  z-index: -20;

}
</style>
