import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pots: [],
  },
  mutations: {
    setPots(state, pots) {
      state.pots = [...pots];
    },
    updateAmounts(state) {
      const newPots = [];
      // TODO probably change this to a reduce statement
      state.pots.forEach((pot) => {
        newPots.push({ ...pot, amount: `${Math.floor(pot.amount * 1.001 * 100) / 100}` });
      });
      state.pots = [...newPots];
    },
    updateTimers(state) {
      const newPots = [];
      // TODO probably change this to a reduce statement
      state.pots.forEach((pot) => {
        if (pot.must_drop_in) {
          const tStringToSec = (tStr) => {
            const split = tStr.split(':');
            const h = parseInt(split[0], 10);
            const m = parseInt(split[1], 10);
            const s = parseInt(split[2], 10);
            return (h * (60 ** 2)) + (m * 60) + s;
          };

          const tSecToString = (tSec) => {
            const h = Math.floor(tSec / (60 ** 2));
            const m = Math.floor((tSec % (60 ** 2)) / 60);
            const s = tSec % 60;

            const hSec = h > 9 ? `${h}` : `0${h}`;
            const mSec = m > 9 ? `${m}` : `0${m}`;
            const sSec = s > 9 ? `${s}` : `0${s}`;

            return `${hSec}:${mSec}:${sSec}`;
          };

          newPots.push({
            ...pot,
            must_drop_in: tSecToString(Math.max((tStringToSec(pot.must_drop_in) - 1), 0)),
          });
        } else {
          newPots.push({ ...pot });
        }
      });
      state.pots = [...newPots];
    },
  },
  getters: {
    getPots(state) {
      return [...state.pots];
    },
  },
  actions: {
    initUpdates() {
      setInterval(() => {
        this.commit('updateAmounts');
      }, 30000);
      setInterval(() => {
        this.commit('updateTimers');
      }, 1000);
    },
  },
  modules: {
  },
});

// TODO:
// - Fake a request (use a promise)
// - input mask jackpot amounts
