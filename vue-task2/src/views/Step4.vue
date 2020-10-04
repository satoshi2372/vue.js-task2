<template>
  <div>
    <div id="info">
      <div id="header">
        <p id="header-step">STEP4</p>
        <h2 id="header-title">
          <span id="fa-card"><font-awesome-icon icon="file-alt"/></span>
          以下の内容をご確認ください
        </h2>
      </div>
      <div id="form">
        <p class="form-title">-性別-</p>
        <p>{{ gender }}</p>
        <p class="form-title">-生年月日-</p>
        <p>{{ year }}年{{ month }}月{{ day }}日</p>
        <p class="form-title">-現在、生命保険に加入されていますか？-</p>
        <p>{{ insurance }}</p>
        <p class="form-title">
          -現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
        </p>
        <p>{{ health }}</p>
        <p class="form-title">
          -過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？-
        </p>
        <p>{{ hospital }}</p>
        <p class="form-title">-ご相談内容-</p>
        <p>{{ message }}</p>
      </div>
    </div>
    <div id="btn-box">
      <button class="next-btn" @click="returnStep">
        前へ戻る<span id="fa-angle"
          ><font-awesome-icon icon="angle-right"
        /></span>
      </button>
      <button class="next-btn">
        送信<span id="fa-angle"><font-awesome-icon icon="angle-right"/></span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'gender',
      'year',
      'month',
      'day',
      'insurance',
      'health',
      'hospital',
      'message',
    ]),
  },
  methods: {
    returnStep() {
      this.$router.push('/step3');
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
