<template>
  <div class="pot" :class="type">
    <div v-if="imgSrc" class="potImg" :style="`background-image: url('${imgSrc}')`"/>
    <div class="potContent">
      <div class="potAmt">
        <animated-number
          class="potAmtInner"
          :data-text="formatAmount(amount)"
          :value="amount"
          :formatValue="formatAmount"
          :duration="2000"
        />
      </div>
      <div v-if="must_drop_in" class="potTimer">
        <span class="timerSpan">
          Must Drop In  <font-awesome-icon :icon="['fa', 'clock']"/>  {{ must_drop_in }}
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
      return `${this.currency}${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    },
  },
};
</script>

<style scoped lang="scss">
.pot {
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  box-shadow: inset 0 0 3em #322f63;
  margin-bottom: 1em;
  position: relative;
  z-index: -10;

  .potImg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .potContent{
    .potAmt{
      position: relative;
      z-index: -5;
      .potAmtInner {
        /* Didn't recognize the typeface -> put generic serif */
        font-family: "Times New Roman", Times, serif;
        font-weight: bold;
        /* Colors aren't exactly on point, image was difficult to sample */
        background: -webkit-linear-gradient(#ffa, #a70);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;

      }
      .potAmtInner:after {
        background: none;
        /* css voodoo to put a shadow on gradient text.
        Unfortunately it doesn't animate with the rest of it*/
        content: attr(data-text);
        left: 0;
        top: 0;
        z-index: -1;
        position: absolute;
        text-shadow: 1px 1px #000;
      }
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
  flex-direction: column;
  padding-bottom: 1em;

  .potImg {
    height: 250px;
  }
  .potContent {
    .potAmt {
      background-image: url('../assets/box.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      .potAmtInner {
        font-size: 2.5em;
      }
    }
    .potTimer {
      font-size: .925em;
    }
  }
}

.medium {
  font-size: 1em;
  flex-direction: row;
  align-items: center;
  background-image: url('../assets/stars.png');

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
      .potAmtInner {
        font-size: 1.75em;
      }
    }
    .potTimer {
      font-size: .925em;
    }
  }
}

@media (max-width: 1350px) {
  .pot {
    .potContent{
      .potAmt{
        .potAmtInner {
          font-size: 1.5em;
        }
      }
    }
  }

  .big {
    .potContent {
      .potAmt {
        .potAmtInner {
          font-size: 1.5em;
        }
      }
      .potTimer {
        font-size: .8em;
      }
    }
  }

  .medium {
    flex-direction: column;
    .potImg {
      width: 100%;
      height: 80px;
    }
    .potContent {
      width: 100%;
      margin-left: 0;
      align-items: center;
      .potAmt {
        .potAmtInner {
          font-size: 1.5em;
        }
      }
      .potTimer {
        font-size: .8em;
      }
    }
  }
}
</style>
