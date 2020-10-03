//stor.jsにimport
import Vue from "vue";
import Vuex from "vuex";
//プラグイン追加
Vue.use(Vuex);

//共有したい値を定義
export default new Vuex.Store({
  state: {
    //step1
    gender: "",
    year: "",
    month: "",
    day: "",
    //step2
    insurance: "",
    health: "",
    hospital: "",
    //step3
    message: "",
  },
  mutations: {
    //step1
    updateGender(state, newGender) {
      state.gender = newGender;
    },
    updateYear(state, newYear) {
      state.year = newYear;
    },
    updateMonth(state, newMonth) {
      state.month = newMonth;
    },
    updateDay(state, newDay) {
      state.day = newDay;
    },
    //step2
    updateInsurance(state, newInsurance) {
      state.insurance = newInsurance;
    },
    updateHealth(state, newHealth) {
      state.health = newHealth;
    },
    updateHospital(state, newHospital) {
      state.hospital = newHospital;
    },
    //step3
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
});
