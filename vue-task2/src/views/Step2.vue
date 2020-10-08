<template>
  <div>
    <div id="info">
      <div id="header">
        <p id="header-step">STEP2</p>
        <h2 id="header-title">
          <span id="fa-card"
            ><font-awesome-icon icon="chalkboard-teacher"
          /></span>
          以下にお答えください
        </h2>
      </div>
      <div id="form">
        <div id="question1">
          <p class="form-title">現在、生命保険に加入されていますか？</p>
          <input
            type="radio"
            id="q1-yes"
            name="q1"
            @click="show = true"
            v-model="insurance"
            value="はい"
          />
          <label for="q1-yes">はい</label>
          <input
            type="radio"
            id="q1-no"
            name="q1"
            @click="show = true"
            v-model="insurance"
            value="はい"
          />
          <label for="q1-no">いいえ</label>
        </div>

        <transition name="fade">
          <div id="question2" v-if="show">
            <p class="form-title">
              現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
            </p>
            <input
              type="radio"
              id="q2-yes"
              name="q2"
              @click="show2 = true"
              v-model="health"
              value="はい"
            />
            <label for="q2-yes">はい</label>
            <input
              type="radio"
              id="q2-no"
              name="q2"
              @click="show2 = true"
              v-model="health"
              value="いいえ"
            />
            <label for="q2-no">いいえ</label>
          </div>
        </transition>

        <transition name="fade2">
          <div id="question3" v-if="show2">
            <p class="form-title">
              過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？
            </p>
            <input
              type="radio"
              id="q3-yes"
              name="q3"
              v-model="hospital"
              value="はい"
            />
            <label for="q3-yes">はい</label>
            <input
              type="radio"
              id="q3-no"
              name="q3"
              v-model="hospital"
              value="はい"
            />
            <label for="q3-no">いいえ</label>
          </div>
        </transition>
      </div>
    </div>
    <div id="btn-box">
      <button class="next-btn" @click="returnStep">
        前へ戻る<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
      <button class="next-btn" @click="nextStep">
        次へ進む<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
    };
  },
  beforeRouteEnter(to, form, next) {
    next((vm) => {
      if (vm.$store.state.health !== '') {
        vm.show = true;
      }
      if (vm.$store.state.hospital !== '') {
        vm.show2 = true;
      }
    });
  },
  computed: {
    insurance: {
      get() {
        return this.$store.state.insurance;
      },
      set(value) {
        this.$store.commit('updateInsurance', value);
      },
    },
    health: {
      get() {
        return this.$store.state.health;
      },
      set(value) {
        this.$store.commit('updateHealth', value);
      },
    },
    hospital: {
      get() {
        return this.$store.state.hospital;
      },
      set(value) {
        this.$store.commit('updateHospital', value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push('/step3');
    },
    returnStep() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* ライフサイクルフック */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* css */
#info {
  width: 60%;
  margin: 30px auto;
  border: 1px solid rgb(129, 209, 209);
}

/* ---- header ----*/
#header {
  position: relative;
  background-color: rgb(215, 243, 243);
  border-bottom: 1px solid rgb(129, 209, 209);
}
#header-step {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  color: white;
  background-color: rgb(49, 153, 219);
}
#fa-card {
  margin-right: 4px;
}
#header-title {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  color: #4a4a4a;
}

/* ---- form ----*/
#form {
  padding: 20px;
  color: #4a4a4a;
}
.form-title {
  font-size: 14px;
  font-weight: normal;
  color: rgb(79, 132, 171);
}
#form input {
  width: 8px;
  height: 8px;
}

/* footer-btn */
#btn-box {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.next-btn {
  display: inline-block;
  margin: 0 20px 0 20px;
  max-width: 120px;
  width: 25%;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: rgb(0, 209, 178);
  border: none;
  border-radius: 3px;
}
#fa-angle {
  margin-left: 16px;
}
</style>
