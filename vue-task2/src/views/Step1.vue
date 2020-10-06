<template>
  <div>
    <div id="info">
      <div id="header">
        <p id="header-step">STEP1</p>
        <h2 id="header-title">
          <span id="fa-card"><font-awesome-icon icon="address-card"/></span>
          お客様の情報を入力してください
        </h2>
      </div>

      <div id="form">
        <div id="gender-box">
          <h3 class="form-title">-性別-</h3>
          <input
            type="radio"
            id="gender-man"
            name="gender"
            v-model="gender"
            value="男性"
          />
          <label for="gender-man" class="gender-label">男</label>
          <input
            type="radio"
            id="gender-woman"
            name="gender"
            v-model="gender"
            value="女性"
          />
          <label for="gender-woman" class="gender-label">女</label>
        </div>

        <div id="birth-box">
          <h3 class="form-title">-生年月日-</h3>
          <select id="year" :value="year" @change="selectedYear">
            <option v-for="n in 100" :value="n + 1920" :key="n">
              {{ (n + 1920) | japaneseCalendar }}
            </option>
          </select>
          <label>年</label>

          <select id="month" :value="month" @change="selectedMonth">
            <option v-for="n in 12" :key="n" :value="n">{{ n }}</option>
          </select>
          <label for="month">月</label>

          <select id="day" :value="day" @change="selectedDay" pla>
            <option disabled selected style="display: none">{{ day }}</option>
            <option v-for="n in daysMax" :key="n" :value="n">{{ n }}</option>
          </select>
          <label for="day">日</label>
        </div>
      </div>
    </div>
    <div id="btn-box">
      <button id="next-btn" @click="nextStep">
        次へ進む<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      radioMan: '',
      radioWoman: '',
      nengoes: [],
      daysMax: '',
    };
  },
  filters: {
    japaneseCalendar(y) {
      let result;
      if (y > 2018) {
        result = `${y} (令和${y - 2018}年)`;
      } else if (y > 1988) {
        result = `${y} (平成${y - 1988}年)`;
      } else if (y > 1925) {
        result = `${y} (昭和${y - 1925}年)`;
      } else if (y > 1911) {
        result = `${y} (大正${y - 1911}年)`;
      }
      return result;
    },
  },
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit('updateGender', value);
      },
    },
    year() {
      return this.$store.state.year;
    },
    month() {
      return this.$store.state.month;
    },
    day() {
      return this.$store.state.day;
    },
  },
  methods: {
    ...mapMutations(['updateYear', 'updateMonth', 'updateDay']),
    selectedYear(e) {
      console.log(e.target.value);
      this.updateYear(e.target.value);
    },
    selectedMonth(e) {
      this.updateMonth(e.target.value);
      //date利用し最大日数の算出
      this.daysMax = new Date(
        this.$store.state.year,
        this.$store.state.month,
        0
      ).getDate();
    },
    selectedDay(e) {
      this.updateDay(e.target.value);
    },
    nextStep() {
      this.$router.push('/step2');
    },
  },
};
</script>

<style scoped>
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
#gender-box {
  margin-bottom: 24px;
}
#gender-man,
#gender-woman {
  width: 8px;
  height: 8px;
}
#gender-woman {
  margin-left: 9px;
}
.gender-label {
  font-size: 16px;
}
#birth-box select:nth-of-type(n + 2) {
  margin-left: 8px;
}
#birth-box label {
  font-size: 16px;
  margin-left: 8px;
}
#year,
#month,
#day {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 16px;
  padding: 8px;
  color: #4a4a4a;
  border-color: #e7e7e7;
  background-image: url(../assets/cursol.png);
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: right 0px center;
}
#year {
  width: 160px;
}
#month,
#day {
  width: 55px;
}
/* footer-btn */
#btn-box {
  text-align: center;
}
#next-btn {
  display: inline-block;
  width: 120px;
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
