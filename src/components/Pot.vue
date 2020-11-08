<template>
  <div class="pot" :class="type">
    <div
      v-if="imgSrc"
      class="potImg"
      :style="`background-image: url('${imgSrc}')`"
    />
    <div class="potContent">
      <div class="potAmt">
        <animated-number :value="amount" :formatValue="formatAmount" :duration="2000"/>
      </div>
      <div v-if="must_drop_in" class="potTimer">
        <span class="timerSpan">
          Must Drop In {{ must_drop_in }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';
import ddImg from '../assets/1.png';
import sdImg from '../assets/2.png';
import hdImg from '../assets/3.png';

export default {
  name: 'Pot',
  components: {
    AnimatedNumber,
  },
  props: {
    type: String,
    amount: String,
    currency: String,
    must_drop_in: String,
    imageType: String,
  },
  computed: {
    imgSrc() {
      switch (this.imageType) {
        case 'daily_drop': return ddImg;
        case 'super_drop': return sdImg;
        case 'hourly_drop': return hdImg;
        default: return null;
      }
    },
  },
  methods: {
    formatAmount(amount) {
      return `${this.currency}${Number(amount).toFixed(2)}`;
    },
  },
};
</script>

<style scoped lang="scss">
.pot {
  color: goldenrod;
  background-image: url('../assets/stars.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;

  .potImg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .potContent{
    .potAmt {
      //
    }
    .potTimer {
      margin-top: 1em;
      .timerSpan {
        font-size: .75em;
        color: #fff;
        padding: 0 .75em;
        background-color: #000;
        border-radius: 2em;
      }
    }
  }
}

.big {
  font-size: 1.2em;
  flex-direction: column;

  .potImg {
    height: 150px;
  }
  .potContent {
    .potAmt {
      background-image: url('../assets/box.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .potTimer {
      //
    }
  }
}

.medium {
  font-size: 1em;
  flex-direction: row;
  align-items: center;

  .potImg {
    width: 40%;
    height: 100px;
  }
  .potContent{
    width: 60%;
    margin-left: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .potAmt {
      //
    }
    .potTimer {
      //
    }
  }
}
</style>
